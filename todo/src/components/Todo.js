import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return(
        <div>
            <h1>Todo.js file</h1>
        </div>
    )
}

export default Todo;