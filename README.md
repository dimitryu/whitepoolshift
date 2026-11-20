# White-Pool משמרות

אפליקציית PWA לניהול משמרות. קבצים סטטיים (GitHub Pages) + Firebase (Auth + Firestore).

- חיבור: `firebase-config.js`. כללי אבטחה: `firestore.rules` (לפרסם ב-Firebase Console ← Firestore ← Rules).
- אין לשמור בריפו רשימות עובדים, טלפונים, קודי כניסה או נתוני מסד.
- לאחר שינוי קוד: להגדיל את גרסת `CACHE` ב-`sw.js`.

## ספריות מקומיות
ה-SDK של Firebase (גרסה 9.23.0, compat) והפונטים (Rubik, Suez One) נשמרים בתיקיות vendor/ ו-fonts/ ולא נטענים מאתרים חיצוניים (CSP). לעדכון גרסה: להוריד מחדש מ-gstatic ולבדוק.
