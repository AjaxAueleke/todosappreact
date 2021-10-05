import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyDNTx_7JPQx2gaDZkXIJsG6Ug82nZCwQpQ",
  authDomain: "todolist-2dec6.firebaseapp.com",
  projectId: "todolist-2dec6",
});
console.log(firebase);
export const db = getFirestore();