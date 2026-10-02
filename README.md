# White-Pool משמרות

אפליקציית PWA לניהול משמרות. קבצים סטטיים (GitHub Pages) + Firebase (Auth + Firestore).

- חיבור: `firebase-config.js`. כללי אבטחה: `firestore.rules` (לפרסם ב-Firebase Console ← Firestore ← Rules).
- אין לשמור בריפו רשימות עובדים, טלפונים, קודי כניסה או נתוני מסד.
- לאחר שינוי קוד: להגדיל את גרסת `CACHE` ב-`sw.js`.
