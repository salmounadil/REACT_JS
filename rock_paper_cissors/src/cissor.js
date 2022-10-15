import React, { Component } from 'react'
import './choix.css'

export default class Cissor extends Component {
  render() {
    return (
        <div onClick={()=>{this.props.diss("ciseau"); this.props.exee()}} className='d-flex justify-content-center align-items-center'>
        <img src="./images/icon-scissors.svg" alt="" />
    </div>
    )
  }
}

