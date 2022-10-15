import React from "react";

class EnTete extends React.Component{
  navigation = (destination)=>{
    this.props.onNavigation(destination)
  }
  render(){
    return (
      <header>
        <nav className="d-flex justify-content-center p-3 gap-3">
            <button onClick={()=>this.navigation('Accueil')}>Accueil</button>
            <button onClick={()=>this.navigation('Galerie')}>Galerie</button>
            <button onClick={()=>this.navigation('Contact')}>Contact</button>
        </nav>
      </header>

    )
  }
}

export default EnTete;