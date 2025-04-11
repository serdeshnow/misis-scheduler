export type ScheduleId = Brand<Id, 'ScheduleId'>

export type ScheduleRole = 'teacher' | 'student';

export type Course = '1' | '2' | '3' | '4' | '1master' | '2master';

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
