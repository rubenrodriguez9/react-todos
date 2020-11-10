import React from 'react'
import PropTypes from 'prop-types'
import "./TodoView.css"

const TodoView = ({todoList, appHandleDeleteTodo, appEditOnClick, editTodoValue, appEditOnChange, appHandleUpdateButton, disableEditButton})=> {
    return (
        <div>
            <ul>
          {todoList.map(({id, todo, editRayTodo}) => {
            return <li key={id} >

               {editRayTodo ? <input onChange={(event) => appEditOnChange(event)} type ="text" name="editTodoValue" value={editTodoValue} /> : <span>{todo}</span>} 
          {editRayTodo ? <button   onClick={() => appHandleUpdateButton(id)} >Update</button>  :<button className={`${disableEditButton ? "disabled" : ""}`}  onClick={() => appEditOnClick(id)} >Edit</button>}
          
                <button onClick={() => appHandleDeleteTodo(id)} >Delete</button>
                </li>
          })}
        </ul>
            
        </div>
    )
}

TodoView.propTypes = {

}

export default TodoView
