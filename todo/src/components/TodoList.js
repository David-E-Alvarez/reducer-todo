import React, { useState, useReducer } from 'react';
import Todo from "./Todo";
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log("initialState: ", initialState);
    return(        
        <div>
             {initialState.map(objs => {
                return <Todo
                    task={objs.task}
                    id={objs.id}
                    completed={objs.completed}
                />
            })}
        </div>
    )
}

export default TodoList;