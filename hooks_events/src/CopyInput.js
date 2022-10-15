import React from 'react'

export default function CopyInput() {
    let copyTxt = (e)=>{
        alert(e.target.value)
    }
  return (
    <div>
        <h3>
            On copy
        </h3>
        <input onCopy={copyTxt} type="text" />
    </div>
  )
}
