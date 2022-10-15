import React, { Component } from 'react'
import Usercard from './usercard'
import './body.css'
import './card.css'


import data from '../src/data/data.json'

export default class Body extends Component {
  state = {
    currentPage: 'daily',
    last :'Day',
    changerEtat: (el,i) => {
      this.setState({ 
        currentPage: el ,
        last : i
      })
    }
  }
  render() {
    return (
      <article className='body d-flex justify-content-center align-items-center flex-column flex-xl-row gap-4  '>
        <Usercard etat={this.state.currentPage} func={this.state.changerEtat} />
        <div className='contenucarte d-flex justify-content-center flex-wrap gap-4'>
          {data.map((e) => {
            return (
              <div style={{ backgroundColor: `${e.color}` }} className='card d-flex flex-column align-items-end justify-content-end'>
                <img className='imgsvg' src={e.image} alt="" />
                <div className='bodycard d-flex flex-column p-4'>
                  <div className='div1card d-flex flex-row justify-content-between align-items-center'>
                    <h6>{e.title}</h6>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
                  </div>
                  <div className='div2card d-flex flex-column'>
                    <h1>{e.timeframes[this.state.currentPage].current}hrs</h1>
                    <h6>Last {this.state.last} - {e.timeframes[this.state.currentPage].previous}hrs</h6>

                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </article>
    )
  }
}
