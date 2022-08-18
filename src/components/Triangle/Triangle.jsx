import React, { useEffect, useState } from 'react'
import triangle from '../../helpers/createTriangle';
import diagonalTriangle from '../../helpers/reverseTriangle';
import "./style.css";
function Triangle() {
    const [value, setValue] = useState("");
    const [state, setState] = useState([]);
 
    useEffect(()=>{
        setState(triangle(value))
    },[value,setValue])
  
    function reverseTriangle() {
      setState(diagonalTriangle(value))
    }
    
    function handleInput(e) {
        if (typeof +e.target.value === "number") {
             setValue(e.target.value)
        } 
       
    }
  return (
      <div className='page'>
          <input type="text" className='add-number' value={value} onChange={(evt)=>handleInput(evt)} />
          <div className='triangle-area'>
              <div>
              {
                  state.map((item,index) => {
                      return <span key={index}>{ item}</span>
                 }) 
              }
              </div>
          </div>
          <button className='reverse-btn' onClick={reverseTriangle}>Reverse</button>
    </div>
  )
}

export default Triangle