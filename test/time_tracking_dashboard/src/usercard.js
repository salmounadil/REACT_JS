import React, { Component } from 'react'
import './usercard.css'
import img from './images/image-jeremy.png'
import '../node_modules/bootstrap/dist/css/bootstrap.css'



export default class Usercard extends Component {
  active =(a)=>{
    document.getElementsByTagName('span')[1].classList.remove('active')
    document.getElementsByTagName('span')[2].classList.remove('active')
    document.getElementsByTagName('span')[3].classList.remove('active')
    a.classList.add('active')
  }
  render() {
    return (
      <div className='usercard'>
        <div className='usercard1 d-flex  gap-3 flex-xl-column flex-row p-3 pb-5 '>
          <img className='imgjeremy' src={img} alt="" />
          <div className='py-4'>
            <span>Report for</span>
            <h3 className='pb-3'>Jeremy Robson</h3>
          </div>
        </div>
        <div className='usercard2 d-flex justify-content-center flex-xl-column flex-row'>
          <span onClick={() => { this.props.func('daily','Day');this.active(document.getElementsByTagName('span')[1]) }} className=' defaut m-1 span d-flex justify-content-start p-1 px-3'>Daily</span>
          <span onClick={() => { this.props.func('weekly','Week');this.active(document.getElementsByTagName('span')[2]) }} className=' defaut m-1 span d-flex justify-content-start p-1 px-3'>Weekly</span>
          <span onClick={() => { this.props.func('monthly','Month');this.active(document.getElementsByTagName('span')[3]) }} className=' defaut m-1 span d-flex justify-content-start p-1 px-3'>Monthly</span>
        </div>
      </div>
    )
  }
}
