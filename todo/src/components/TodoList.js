import React from 'react';
import Todo from "./Todo";

const TodoList = (props) => {
    return(        
        <div>
             {props.tasksArray.map(objs => {
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