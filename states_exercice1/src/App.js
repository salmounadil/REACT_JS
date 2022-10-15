import React, { Component } from "react";
// import Test from "./Test";
import Perso from "./perso";

class App extends Component {
  state = {
    logg : ()=>{
    let nvstate = this.state.perso.map((e)=>{
      e.age +=10;
      return e.age
    })
    this.setState({
      nvstate
    })
    },
  perso :[
    {
      id : 1,
      prenom : "Indiana",
      nom : "Jones",
      age : 43,
      adresse : "Los Angeles"
    },
    {
      id : 2,
      prenom : "Ind",
      nom : "Jes",
      age : 3,
      adresse : "Loeles"
    },
    {
      id : 3,
      prenom : "Inana",
      nom : "Jos",
      age : 4,
      adresse : "Los les"
    }
  ]
}

  


 
  render() {
 
    return (
      <>
      
      <Perso real={this.state.perso} func={this.state.logg}/>
      
    </>
    )
  }
}
;

export default App;