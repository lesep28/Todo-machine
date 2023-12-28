import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";




// import './App.css';

// const defaultTodos = [
//   {
//     text: "Cortar Cebolla",
//     completed: true,
//   },
//   {
//     text: "Tomar curso de intro a React",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: false,
//   },
//   { text: "LALALALAA", completed: false },
// ];



function App() {
  
  return (
    <TodoProvider>
     <AppUI/>
    </TodoProvider>
  );
}

export default App;
