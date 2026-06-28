
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

export async function createUserProfile(user, name) {

  await setDoc(

    doc(db, "users", user.uid),

    {

      uid: user.uid,

      name,

      email: user.email,

      goal: null,

      time: null,

      interests: [],

      streak: 0,

      weeklyProgress: 0,

      createdAt: serverTimestamp(),

      updatedAt: serverTimestamp(),

    }

  );

}