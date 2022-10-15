import React, {useState } from 'react'

export default function Test() {
    
    let [chiffre,clique] = useState(0);
    setInterval(()=>{
        clique(chiffre+1)
    },1000);

    // useEffect(()=>{
    //     chiffre = chiffre
    // })

  return (
    <div>
      <h1>{chiffre}</h1>
      <button onClick={()=>{clique(chiffre + 1)}}>Tien</button>
    </div>
  )
}
