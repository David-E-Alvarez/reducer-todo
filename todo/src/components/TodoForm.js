import React, {useState, useReducer} from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState(''); 
    const handleChanges = e => {
        setNewTodo(e.target.value);
        console.log("e.target.value", e.target.value)
    };
    return(
        <div>
            <input
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleChanges}
            />
            <button
                onClick={() =>
                    props.dispatch({type: 'ADD_TASK', payload: newTodo})
            }
            >Add Todo</button>
            <button
                onClick={() => {
                    props.dispatch({type: 'CLEAR_TASK'})
                }}
            >Clear Todo</button>
        </div>
    )
}

export default TodoForm;