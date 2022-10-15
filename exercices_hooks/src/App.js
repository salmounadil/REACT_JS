import { useState } from "react";
import Personnage from "./Personnage";
import Article from "./Article";

function App() {

  let [moi,renommer] = useState({
    nom:'Salmoun',
    prenom:'Adil',
    age:29,
    commune:'Molenbeek'
  });

  let [tab] = useState([
    {
      id:1,
    nom: "vinicius" ,
    prenom:"junior"
  },
    {
      id:2,
      nom: "valverde" ,
    prenom: "fede"
  },
    {
      id:3,
      nom: "goes" ,
    prenom: "rodrygo"
  },
    {
      id:4,
      nom: "camavinga" ,
    prenom: "eduardo"
  },
    {
      id:5,
      nom: "tchouameni" ,
    prenom:"aurelien"
  },
  ])
  

  return (
    <div className="App">
        <Personnage my = {moi} rename={()=>{renommer({
    nom:'Sal',
    prenom:'Ad',
    age:18,
    commune:'Anderlecht'
  })}}  />
  <Article real={tab} />
    </div>
  );
}

export default App;
