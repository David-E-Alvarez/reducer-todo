import React from "react"

const TodoList = (props) => {
    console.log("props: ", props)
    return(
        <div>
            {props.state.map(taskObj =>{
                return <h3 style={{textDecoration: taskObj.completed ? 'line-through': ""}} onClick={() => {
                    const itemIclicked = taskObj.id;
                    props.dispatch({type: 'TOGGLE', payload: itemIclicked})
                }}>{taskObj.task}</h3>
            })}
        </div>
    )
}
export default TodoList;