import React from 'react'

 let Texte = (p)=> {
  let nouveautexte;
   let changeTexte = (e)=>{
    if(e.key ==='Enter'){
        nouveautexte = e.target.value
        p.setVal(nouveautexte)
       
        
    }
   }
  return (
    <div>
        <h2>
            {p.txt}
        </h2>
        <input onKeyPress={changeTexte} type="text" />
    </div>
  )
}

export default Texte
