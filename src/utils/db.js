import { openDB } from 'idb';

const initDB = async () => {
  return openDB('SubmissionsDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('submissions')) {
        db.createObjectStore('submissions', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const saveSubmission = async (submission) => {
  const db = await initDB();
  await db.add('submissions', submission);
};

export const getSubmissions = async () => {
  const db = await initDB();
  return await db.getAll('submissions');
};

export const clearSubmissions = async () => {
  const db = await initDB();
  await db.clear('submissions');
};

export const resetDB = async () => {
  const db = await initDB();
  db.close();
  await indexedDB.deleteDatabase('SubmissionsDB');
};
