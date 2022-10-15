import React, { Component } from 'react'
import './choix.css'

export default class Rock extends Component {
  render() {
    return (
        <div onClick={()=>{this.props.diss("pierre"); this.props.exee()}} className='d-flex justify-content-center align-items-center'>
        <img src="./images/icon-rock.svg" alt="" />
        </div>
    )
  }
}

