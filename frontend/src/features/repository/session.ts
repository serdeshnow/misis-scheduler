import db from './sqlite';

export interface PlayerSession {
  username: string;
  level: number; // >=1
  power: number; // >=1, всегда >= level
}

export type Session = PlayerSession[];

export function createSession(id: number) {
  const session: PlayerSession[] = [];
  db.prepare('INSERT OR REPLACE INTO users (id, session) VALUES (?, ?)').run(
    id,
    JSON.stringify(session),
  );
}

export function addPlayer(id: number, username: string) {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) throw new Error('Session not found');
  const session: PlayerSession[] = JSON.parse(row.session);
  session.push({ username, level: 1, power: 1 });
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(
    JSON.stringify(session),
    id,
  );
}

export function updatePlayerName(id: number, oldUsername: string, newUsername: string) {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) throw new Error('Session not found');
  const session: PlayerSession[] = JSON.parse(row.session);
  for (const p of session) {
    if (p.username === oldUsername) {
      p.username = newUsername;
    }
  }
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(
    JSON.stringify(session),
    id,
  );
}

export function updatePlayerStats(
  id: number,
  username: string,
  level?: number,
  power?: number,
) {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) throw new Error('Session not found');
  const session: PlayerSession[] = JSON.parse(row.session);
  for (const p of session) {
    if (p.username === username) {
      if (level !== undefined) p.level = level;
      if (power !== undefined) p.power = power;
    }
  }
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(
    JSON.stringify(session),
    id,
  );
}

export function resetStats(id: number) {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) throw new Error('Session not found');
  const session: PlayerSession[] = JSON.parse(row.session);
  for (const p of session) {
    p.level = 1;
    p.power = 1;
  }
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(
    JSON.stringify(session),
    id,
  );
}

export function clearSession(id: number) {
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(JSON.stringify([]), id);
}

export function removePlayer(id: number, username: string) {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) throw new Error('Session not found');
  let session: PlayerSession[] = JSON.parse(row.session);
  session = session.filter((p) => p.username !== username);
  db.prepare('UPDATE users SET session = ? WHERE id = ?').run(
    JSON.stringify(session),
    id,
  );
}

export function getSession(id: number): PlayerSession[] | null {
  const row = db.prepare('SELECT session FROM users WHERE id = ?').get(id) as
    | { session: string }
    | undefined;
  if (!row) return null;
  return JSON.parse(row.session) as PlayerSession[];
}
