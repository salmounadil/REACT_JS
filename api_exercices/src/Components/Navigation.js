import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default class Navigation extends Component {
    state = {
        view : 'display'
    }
    handleClick = (newView) =>{
        this.setState({
            view : newView
        })

    }
  render() {
    return (
        <div>
            <div className="navbar">
                <button onClick={()=>{this.handleClick('display')}}>Afiicher</button>
                <button onClick={()=>{this.handleClick('create')}}>Créer</button>
            </div>
           {this.state.view === "display" && <ToDoList/>} 
           {this.state.view === "create" && <ToDoForm/>} 
        </div>
    )
  }
}
