import React from "react";
import EnTete from "./enTete";
// import PiedDePage from "./piedDePage";
import DisplayTime from "./section";

class App extends React.Component{
  
  currentPage = 'heure';
  state = {
  formatTime : 'phpTime'
}
  onNavigationParent = (destination) => {
    this.currentPage = destination;
    console.log(this.currentPage);
  }
  handleClick = (format) => {
    console.log(format);
    this.setState(
      {
        formatTime : format
      }
    )
  }
  
  render(){
    console.log(this.state.formatTime);
    return (
      <>
      <EnTete onNavigation={this.onNavigationParent}/>
      <DisplayTime format ={this.state.formatTime}/>
      <div className="d-flex justify-content-center align-items-center gap-3 m-3 p-3 bg-dark text-white fw-bold">
        <button onClick={()=> this.handleClick('jsTime')} className="bg-primary text-white fw-bold p-3 fs-5">Javascript</button>
        <button onClick={()=> this.handleClick('phpTime')} className="bg-primary text-white fw-bold p-3 fs-5">PHP</button>
        <button onClick={()=> this.handleClick('humanTime')} className="bg-primary text-white fw-bold p-3 fs-5">Humain</button>
      </div>
      {/* <PiedDePage/> */}
      </>

    )
  }
}

export default App;