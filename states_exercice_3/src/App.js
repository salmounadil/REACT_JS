import React, { Component } from 'react'

export default class App extends Component {
  
  state ={
    
    famille : [
      {
        nom : 'adil' 
      },
      {
        nom : 'jalal' 
      },
      {
        nom : 'myriam' 
      },
      {
        nom : 'omar' 
      },
      {
        nom : 'hamza' 
      }
    ],
    removeEl : ()=>{
      let nvstate = this.state.famille.splice(0,1);
      this.setState(nvstate)
      
  },
 
    
  };
  
  
  render() {
    let longueur  = this.state.famille.length
    return (
      <div>
        <h1>{this.state.famille[0].nom} : {this.state.famille[1].nom} : {this.state.famille[2].nom} : {this.state.famille[3].nom} : {this.state.famille[4].nom}</h1>
        <button onClick={this.state.removeEl}>Clique</button>
        {longueur}
      </div>
    )
  }
}

