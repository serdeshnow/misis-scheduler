import React, { useState, useEffect, useCallback } from 'react';
import {
  createAssistant,
  createSmartappDebugger,
  AssistantAppState,
  AssistantViewItemBase,
  Action
} from '@salutejs/client';

import './Bot.css';
import { TaskList } from './pages/TaskList';

interface Note {
  id: string;
  title: string;
  completed?: boolean;
}

interface AssistantAction {
  type: string;
  note?: string;
  id?: string;
}

interface ItemSelectorItem {
  number: number;
  id: string;
  title: string;
}

interface AppState extends AssistantAppState {
  item_selector: {
    items: Array<ItemSelectorItem & AssistantViewItemBase<Action>>;
    ignored_words: string[];
  };
}

const initializeAssistant = async (getState: () => AppState) => {
  if (import.meta.env.MODE === 'development') {
    return createSmartappDebugger({
      token: import.meta.env.VITE_TOKEN ?? '',
      initPhrase: `Запусти ${import.meta.env.VITE_SMARTAPP}`,
      getState,
      nativePanel: {
        defaultText: 'ччччччч',
        screenshotMode: false,
        tabIndex: -1,
      },
    });
  }

  // Ждем готовности AssistantHost в production
  if (!window.AssistantHost) {
    await new Promise<void>((resolve) => {
      const checkInterval = setInterval(() => {
        if (window.AssistantHost) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
    });
  }

  return createAssistant({ getState });
};

export const Bot: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([{
    id: Math.random().toString(36).substring(7),
    title: 'тест',
    completed: false
  }]);
  const [assistant, setAssistant] = useState<any>(null);
  const [assistantError, setAssistantError] = useState<string | null>(null);

  const getStateForAssistant = useCallback((): AppState => {
    const state: AppState = {
      item_selector: {
        items: notes.map(({ id, title }, index) => ({
          number: index + 1,
          id,
          title,
        })),
        ignored_words: [
          'добавить', 'установить', 'запиши', 'поставь', 'закинь', 'напомнить',
          'удалить', 'удали',
          'выполни', 'выполнил', 'сделал'
        ],
      },
    };
    return state;
  }, [notes]);

  useEffect(() => {
    let isMounted = true;
    let assistantInstance: any;

    const init = async () => {
      try {
        assistantInstance = await initializeAssistant(getStateForAssistant);
        if (!isMounted) return;

        setAssistant(assistantInstance);

        const handleAssistantData = (event: any) => {
          if (event.type === 'character') {
            console.log(`Character: "${event?.character?.id}"`);
          } else if (event.type === 'insets') {
            console.log('Insets event');
          } else if (event.action) {
            dispatchAssistantAction(event.action);
          }
        };

        assistantInstance.on('data', handleAssistantData);
        assistantInstance.on('start', (event: any) => {
          console.log('Assistant started', event);
        });
        assistantInstance.on('error', (error: any) => {
          console.error('Assistant error:', error);
          setAssistantError('Ошибка ассистента');
        });

      } catch (error) {
        console.error('Assistant initialization failed:', error);
        if (isMounted) {
          setAssistantError('Не удалось инициализировать ассистента');
        }
      }
    };

    init();

    return () => {
      isMounted = false;
      if (assistantInstance) {
        assistantInstance.close();
      }
    };
  }, [getStateForAssistant]);

  const _send_action_value = useCallback((action_id: string, value: string) => {
    if (!assistant) return;

    const data = {
      action: {
        action_id,
        parameters: {
          value,
        },
      },
    };

    const unsubscribe = assistant.sendData(data, (data: any) => {
      const { type, payload } = data;
      unsubscribe();
    });
  }, [assistant]);

  const play_done_note = useCallback((id: string) => {
    const note = notes.find(note => note.id === id);
    if (note && !note.completed) {
      const texts = ['Молодец!', 'Красавчик!', 'Супер!'];
      const idx = Math.floor(Math.random() * texts.length);
      _send_action_value('done', texts[idx]);
    }
  }, [notes, _send_action_value]);

  const add_note = useCallback((action: AssistantAction) => {
    if (!action.note?.trim()) return;

    setNotes(prevNotes => [
      ...prevNotes,
      {
        id: Math.random().toString(36).substring(7),
        title: action.note.trim(),
        completed: false,
      },
    ]);
  }, []);

  const done_note = useCallback((action: AssistantAction) => {
    if (!action.id) return;

    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === action.id ? { ...note, completed: !note.completed } : note
      )
    );
  }, []);

  const delete_note = useCallback((action: AssistantAction) => {
    if (!action.id) return;

    setNotes(prevNotes => prevNotes.filter(({ id }) => id !== action.id));
  }, []);

  const dispatchAssistantAction = useCallback((action: AssistantAction) => {
    if (!action) return;

    switch (action.type) {
      case 'add_note':
        return add_note(action);
      case 'done_note':
        return done_note(action);
      case 'delete_note':
        return delete_note(action);
      default:
        console.warn('Unknown action type:', action.type);
    }
  }, [add_note, done_note, delete_note]);

  if (assistantError) {
    return <div className="error-message">{assistantError}</div>;
  }

  return (
    <div className="bot-container">
      <TaskList
        items={notes}
        onAdd={(note) => add_note({ type: 'add_note', note })}
        onDone={(note) => {
          play_done_note(note.id);
          done_note({ type: 'done_note', id: note.id });
        }}
      />
    </div>
  );
};
