import Database from 'better-sqlite3';

const db = new Database('./mydb.sqlite');

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session JSON
  )
`,
).run();

export default db;
