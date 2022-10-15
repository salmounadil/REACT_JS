import React, { Component } from 'react'
import './card.css'


export default class Card extends Component {
    render() {
        return (
              <div className='card d-flex flex-column align-items-end justify-content-end'>
                <div className='bodycard d-flex flex-column p-4'>
                    <div className='div1card d-flex flex-row justify-content-between align-items-center'>
                        <h6>Work</h6>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </div>
                    <div className='div2card d-flex flex-column'>
                        <h1>32hrs</h1>
                        <h6>Last Week - 8hrs</h6>
                        <h3>{data[0].title}</h3>
                    </div>
                </div>
              </div>
        )
    }
}
