import React, { Component } from 'react'
import './score.css'


export default class Score extends Component {
  render() {
    return (
      <div className='divtitre d-flex justify-content-between align-items-center p-4'>
            <div className='titre'>
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className='divscore d-flex aligns-items-center flex-column justify-content-center'>
                <span className='titrescore text-center'>SCORE</span>
                <span className='score d-flex align-items-center justify-content-center score '>{this.props.lescore}</span>
            </div>
      </div>
    )
  }
}
