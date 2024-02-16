import { initializeApp } from "firebase/app";
import {
  child,
  get,
  getDatabase,
  ref,
  remove,
} from "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database);
const data = get(child(dbRef, "/Projects"))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = [];
      snapshot.forEach((snap) => {
        data.push({ ...snap.val(), id: snap.key });
      });
      return data;
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
    return error;
  });

export const projectById = async (id) => {
  return get(child(dbRef, `/Projects/${id}`))
    .then((snapshot) => {
      console.log({ ...snapshot.val(), id: snapshot.key });
      const project = { ...snapshot.val(), id: snapshot.key };
      return project;
    })
    .catch((err) =>
      console.log(`Error getting Project by ID ${err}`)
    );
};

export default data;
