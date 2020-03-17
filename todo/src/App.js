import React , { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../src/reducers/todoReducer';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("initialState in App.js: ", initialState);
  return (
    <div className="App">
     <h1>Todos!</h1>
     <TodoList tasksArray={initialState}/>
     
    </div>
  );
}

export default App;
