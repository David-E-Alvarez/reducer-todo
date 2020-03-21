import React, { useReducer } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoList from './components/TodoList';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
     <h1>Todos!</h1> 
     <TodoList state={state} dispatch={dispatch}/>    
     <TodoForm dispatch={dispatch}/>   
    </div>
  );
}

export default App;
