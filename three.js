import React, { useRef,useEffect, useState } from 'react'

function Threx() {
    const one=useRef("")
    const two=useRef(0)
    useEffect(() => {
        two.current=two.current+1
        return () => {
            
        }
    })
    const klo=()=>{
        one.current.focus()
        one.current.value="Hamza"

    }
    return (
        <div>
            <h1>use ref</h1>
            <p>It is used to mult the value of the Object and is aksso use to pass the values into input fiels</p>
            <input  ref={one}/>
            <button onClick={klo}>Prexx Me</button>
            <p>{two.current}</p>
            <Ground/>
            <h1>useLayoutRef</h1>
        <p>It is mostaly used to measure the Dimansion of then Render field</p>
        </div>
    )
}

export default Threx

// another reff 
export function Ground(){
    const reftwo=useRef("")
    const refone=useRef(0)
    const [rfr,setrfr]=useState("")
    useEffect(()=>{
        refone.current=refone.current+1
    })
    return(<div>
        <input ref={reftwo} onChange={(e)=>setrfr(e.target.value)}/>
        <h1>Render items : {refone.current}</h1>
    </div>)
} 