import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
     <h1>Todos!</h1>
     <TodoList/>
    </div>
  );
}

export default App;
