import React from 'react'

export default function ColorInput() {
  return (
    <div>
      <input onBlur={(a)=>{a.target.style.backgroundColor=''}} onFocus={(e)=>{e.target.style.backgroundColor='green'}} onfoc type="text" />
    </div>
  )
}
