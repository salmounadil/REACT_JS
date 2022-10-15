import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './choixfait.css'
import ChoixCissor from './choixCissor'
import ChoixPaper from './choixPaper'
import ChoixRock from './choixRock'



export default class ChoixFait extends Component {
  resultat = '...';
 
  
  affichageMonChoix;
  affichageTonChoix;
  render() {
    if (this.props.mychoice === "papier") {
      this.affichageMonChoix = <ChoixPaper/>
    }
    if (this.props.mychoice === "ciseau") {
      this.affichageMonChoix = <ChoixCissor/>
    }
    if (this.props.mychoice === "pierre") {
      this.affichageMonChoix = <ChoixRock/>
    }
    if (this.props.youchoice === 0) {
      this.affichageTonChoix = <ChoixPaper/>;
    
    }
    if (this.props.youchoice === 1) {
      this.affichageTonChoix = <ChoixCissor/>;
      
    }
    if (this.props.youchoice === 2) {
      this.affichageTonChoix = <ChoixRock/>;
      
    }
    
   
    return (
      <div className='choixfait d-flex justify-content-evenly'>
        <div className='monchoix d-flex flex-column gap-5 justify-content-center'>
          <span className='text-center'>YOU PICKED</span>
          {this.affichageMonChoix}
        </div>
        <div className='resultat d-flex flex-column justify-content-center align-items-center gap-3'>
          <span>{this.props.res}</span>
          <button onClick={()=>{this.props.red()}}>PLAY AGAIN</button>
        </div>
        <div className='tonchoix d-flex flex-column gap-5 justify-content-center'>
          <span className="text-center">THE HOUSE PICKED</span>
        {this.affichageTonChoix}
          </div>
      </div>
    )
  }
}
