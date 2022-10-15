import React from 'react'

export default function article(a) {
    
 return (
    <div>
       {a.real.map((e,i)=>{
        return(
            <h2 key={e.id}>{e.nom} + {e.prenom} : {i}</h2>
        )
       })}
    </div>
 )

}
