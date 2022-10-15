import React, { Component } from 'react'
import './choix.css'

export default class Paper extends Component {

  render() {
    return (
        <div onClick={()=>{this.props.diss("papier"); this.props.exee()}} className='d-flex justify-content-center align-items-center'>
          <img src="./images/icon-paper.svg" alt="" />
        </div>
    )
  }
}

