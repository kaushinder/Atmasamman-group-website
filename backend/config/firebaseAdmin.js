const admin = require("firebase-admin");

let initialized = false;

const initFirebaseAdmin = () => {
  if (initialized) return admin;
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        : undefined,
    }),
  });
  initialized = true;
  console.log("Firebase Admin initialized");
  return admin;
};

module.exports = initFirebaseAdmin;
