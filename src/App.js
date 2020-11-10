import './App.css';
import {v4 as uuidv4} from "uuid"

import React, { Component } from 'react'
import TodoView from "./components/TodoView"

export default class App extends Component {

state = {
  todoList: [
    {
      id:uuidv4(),
      todo: "clean clothes",
      editRayTodo: false
    },
    {
      id:uuidv4(),
      todo: "fix passport",
      editRayTodo: false
    },
    {
      id:uuidv4(),
      todo: "check covid results",
      editRayTodo: false
    }
  ],
  todoValue: "",
  errorMessage: false,
  editTodoValue: "",
  disableEditButton: false
}

inputOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
    errorMessage: false
  })
 
}

buttonleOnClick = () => {

  if(this.state.todoValue.length === 0 ){
    this.setState({
      errorMessage: true
    })
    return
  }

  let arr = [...this.state.todoList, {id:uuidv4(), todo:this.state.todoValue}]

  this.setState({
    todoList: arr,
    todoValue: ""
  })
}

appHandleDeleteTodo = (targetID) => {
  let arr = [...this.state.todoList.filter(({id}) => {
    return id !== targetID
  } )]

  this.setState({
    todoList: arr
  })
}

appEditOnClick = (targetID) => {
  let arr = [...this.state.todoList]

  let newArr = arr.map((item) => {
    if(targetID === item.id){
     item.editRayTodo = true;
    }
    return item
    
  
    

  })
  this.setState({
    todoList: newArr,
    disableEditButton: true
  })



  console.log(this.state.disableEditButton);
  
}

appEditOnChange = (event) => {
 this.setState({
   [event.target.name]: event.target.value
 })

 console.log(this.state.editTodoValue);
}

appHandleUpdateButton = (targetID) => {
  
  let arr = [...this.state.todoList]

  let newArr = arr.map((item) => {
    if(targetID === item.id){
      item.todo = this.state.editTodoValue
      item.editRayTodo = false
    }
    return item

  })
  
  

  this.setState({
    todoList: newArr,
    editTodoValue:"",
    disableEditButton: false

  })
}


  render() {
    const {todoList, editTodoValue, disableEditButton} = this.state
    return (
      <div>
        {this.state.errorMessage ? <div>Please enter a to do!</div> : null}

        <input onChange={this.inputOnChange} type="text" name="todoValue" value={this.state.todoValue} />
        <button onClick={this.buttonleOnClick} >Submit</button>
        <TodoView todoList={todoList} 
                  appHandleDeleteTodo={this.appHandleDeleteTodo}
                  appEditOnClick={this.appEditOnClick}
                  editTodoValue={editTodoValue}
                  appEditOnChange={this.appEditOnChange}
                  appHandleUpdateButton={this.appHandleUpdateButton}
                  disableEditButton={disableEditButton}
        />

        {todoList.length===0 ? <div> No todos. </div> : null}
        
      </div>
    )
  }
}
