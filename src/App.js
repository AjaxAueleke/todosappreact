import "./App.css";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";

function App() {
  const [todoVal, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "todos"), (doc) => {
      console.log("Current data: ", doc.data());
      // setTodoList(doc.data());
      return () => {
        unsub();
      };
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoVal) {
      try {
        const docRef = await addDoc(collection(db, "todos"), {
          todo: todoVal,
          completed: false,
          date: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);

      }
    }
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todoVal}
          placeholder="Add your todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      {todoList?.map((todos) => (
        <div>{todos.todo}</div>
      ))}
    </div>
  );
}

export default App;
