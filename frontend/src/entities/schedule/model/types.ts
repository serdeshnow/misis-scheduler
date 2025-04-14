export type ScheduleId = Brand<Id, 'ScheduleId'>

export type ScheduleRole = 'teacher' | 'student';

export type Course = '1' | '2' | '3' | '4' | '1master' | '2master';

/** ====== GPT Version ====== */
export interface ScheduleEntry {
  title: string;
  location: string;
  teacher: string;
}

export type WeekType = 0 | 1;

export interface ScheduleRaw {
  day: number;
  order: number;
  week: WeekType;
  title: string;
  location: string[];
  teacher: string[];
}

export type GroupedSchedule = {
  [order: number]: {
    [day: number]: ScheduleEntry[];
  };
};

/** ====== =========== ====== */

export interface Schedule {
  id: ScheduleId;
  // BUSINESS
  role: ScheduleRole;
  name: string;
  department?: string; // Кафедра (институт) если не teacher
  course?: Course;
  group: string; // ПРОДУМАТЬ
  subgroup?: '1' | '2';

  image?: Url;
}


export interface DaySchedule {
  "type": "ordinary" | "english", // DayScheduleType
  "day": number, // 0 - 5 // DayScheduleDay
  "order": number, // 1 - 6 // DayScheduleOrder
  "week": 0 | 1; // 0 | 1 // DayScheduleOrder
  "institute": "ИКН", // literal type Institute
  "year": "2 курс", // 2 курс //
  "group": ["БПМ-23-1 [1]", "БПМ-23-1 [2]"], // Group[]
  "subgroup": null, // Subgroup
  "title": "Иностранный язык (Практические)", // DayScheduleTitle
  "teacher": [""], // DayScheduleTeacher[]
  "location": ["Каф. ИЯКТ"], // DayScheduleLocation[]
  "begins": "14:30", // string
  "ends": "16:05", // string
  "id": null // null
}

// "type": "english",
//   "day": 0,
//   "order": 4,
//   "week": 0,
//   "institute": "ИКН",
//   "year": "2 курс",
//   "group": ["БПМ-23-1 [1]", "БПМ-23-1 [2]"],
//   "subgroup": null,
//   "title": "Иностранный язык (Практические)",
//   "teacher": [""],
//   "location": ["Каф. ИЯКТ"],
//   "begins": "14:30",
//   "ends": "16:05",
//   "id": null
