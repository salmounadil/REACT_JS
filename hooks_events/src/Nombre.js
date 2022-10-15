import React from 'react'

export default function Nombre(a) {
  return (
    <div>
        <h1>Le nombre : {a.chiffre} </h1>
        <button onClick={a.func}>Incrémenter</button>
    </div>
  )
}
