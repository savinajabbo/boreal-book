import { getSubmissions, clearSubmissions } from './db';

export const syncSubmissions = async () => {
  if (navigator.onLine) {
    const submissions = await getSubmissions();
    console.log('Submissions synced:', submissions);
  }
};

window.addEventListener('online', syncSubmissions);
