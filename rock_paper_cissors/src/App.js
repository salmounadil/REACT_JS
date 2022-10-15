import React, { Component } from 'react'
import Score from './score'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Choix from './choix'
import ChoixFait from './ChoixFait'

export default class App extends Component {
  newscore = 0;
  state = {
    resultat:"...",
    change:0,
    score: 0 ,
    monChoix :'',
    tonChoix :'',
    currentPage : "choix",
    display : (a)=>{
      let tonchoix = Math.floor(Math.random() * 3 );
      this.setState({
        monChoix : a,
        tonChoix : tonchoix,
        currentPage : "choixfait"
      
      });
      
      
      
   
    },
    redisplay : ()=>{
      this.setState({
        currentPage :"choix",
        resultat: '...'
      })
    },
    execution : ()=>{
      setTimeout(() => {
        if (this.state.monChoix === "papier" && this.state.tonChoix === 0) {
          this.setState({
            resultat:"DRAW"
          })
          console.log(this.state.tonChoix);
        }
        if (this.state.monChoix === "ciseau" && this.state.tonChoix === 1) {
          this.setState({
            resultat:"DRAW"
          })
          console.log(this.state.tonChoix);
        }
        if (this.state.monChoix === "pierre" && this.state.tonChoix === 2) {
          this.setState({
            resultat:"DRAW"
          })
          console.log(this.state.tonChoix);
        }
        if (this.state.monChoix === "pierre" && this.state.tonChoix === 0) {
          this.newScore -=1
          this.setState({
            resultat: "YOU LOSE",
            score: this.newScore
          }) 
          console.log(this.state.tonChoix);
          
         
        }
        if (this.state.monChoix === "pierre" && this.state.tonChoix === 1) {
          this.newScore +=1
          this.setState({
            resultat : "YOU WIN",
            score: this.newScore
          }) 
                console.log(this.state.tonChoix);
         
        }
        if (this.state.monChoix === "papier" && this.state.tonChoix === 1) {
          this.newScore -=1
          this.setState({
            resultat: "YOU LOSE",
            score: this.newScore
          }) 
          console.log(this.state.tonChoix);
          
         
        }
        if (this.state.monChoix === "papier" && this.state.tonChoix === 2) {
          this.newScore +=1
          this.setState({
            resultat : "YOU WIN",
            score: this.newScore
          }) 
                console.log(this.state.tonChoix);
         
        }
        if (this.state.monChoix === "ciseau" && this.state.tonChoix === 0) {
          this.newScore +=1
          this.setState({
            resultat : "YOU WIN",
            score: this.newScore
          }) 
                console.log(this.state.tonChoix);
         
        }
        if (this.state.monChoix === "ciseau" && this.state.tonChoix === 2) {
          this.newScore -=1
          this.setState({
            resultat: "YOU LOSE",
            score: this.newScore
          }) 
          console.log(this.state.tonChoix);
          
         
        }
        
      }, 1000);
    }

  


  }
  newScore = this.state.score;
  pageContent ;
  
  
  render() {
    console.log("le score"+this.state.score)
    console.log("mon choix"+this.state.monChoix)
    console.log("ton choix"+this.state.tonChoix)
    
        if (this.state.currentPage === "choix") {
          this.pageContent = <Choix page ={this.state.currentPage} dis={this.state.display} exe={this.state.execution} ch={this.state.monChoix} />
        };
        if (this.state.currentPage === "choixfait") {
          this.pageContent = <ChoixFait nvoscore={this.newScore} res={this.state.resultat} red={this.state.redisplay} scoree={this.state.changerScore} page ={this.state.currentPage} mychoice={this.state.monChoix} youchoice={this.state.tonChoix}/>
        }
    return (
      
        <div className='d-flex justify-content-center align-items-center gap-5 flex-column'>
          <Score lescore={this.state.score}/>
          {this.pageContent}
        </div>
      
    )
  }
}
