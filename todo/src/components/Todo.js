import React, { useState, useReducer } from 'react';


const Todo = (props) => {
    console.log("props in Todo.js", props)
    return(
        <div>
            <h1>{props.task}</h1>
        </div>
    )
}

export default Todo;