import { useState } from "react";
import Nombre from "./Nombre";
import Texte from "./Texte";
import CopyInput from "./CopyInput";
import Bouton from "./Bouton";
import ColorInput from "./ColorInput";

function App() {
  let [nombre,setIncrementer] = useState(0)
  let changer = ()=>{
    setIncrementer(nombre+1)
  }

  let [texte,setVal] = useState(
  'Input Content'
   )

  return (
    <div className="p-5 App d-flex flex-column gap-5">
        <Nombre chiffre={nombre} func={changer}/>
        <Texte txt={texte } setVal={setVal} />
        <CopyInput/>
        <Bouton/>
        <ColorInput/>
    </div>
  );
}

export default App;
