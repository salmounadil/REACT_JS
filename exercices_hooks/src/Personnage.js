import React from 'react'

export default function Personnage(p) {
    
   

  return (
    <div>
      <h1>Mon nom est {p.my.nom} {p.my.prenom}</h1>  
      <h1>J'ai {p.my.age} ans et j'habite à {p.my.commune}</h1>  
      <button onClick={p.rename}>Clique</button>
    </div>
  )
}
