import React from 'react'
import './style.css'

export default function Typebox(props) {
    function upperCaseFirst(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

  return (
    <>
      <div className='typeBox'style={{backgroundColor: props.color[1]}}>
        <h5 className='typeText'>{upperCaseFirst(props.tipo)}</h5>
      </div>

    </>

  )
}
