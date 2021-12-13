import { useEffect } from "react"
import { useRef, useState } from "react"


export function Reffs() {
    const [ow,setow]=useState("")
    const reff=useRef(null)
    const azx=(e)=>{
        setow(e.target.value)
    }
    useEffect(()=>{
        console.log(ow)

    },[])
    const plo=()=>{
        reff.current.focus()
    }
    return (
        <div>
            <h1>Use Reffs</h1>
            <p>it is mostaly uses in input fields it mute the input values </p>
            <input ref={reff} value={ow} onChange={azx} type={"text"}  placeholder="Text Only"/><br/>
            <button onClick={plo}>Inputss</button>
            <p>It is like a box that hold the values </p>

            <Five/>
        </div>
    )
}

// another example of reffs
export function Five() {
        const [wo,setwo]=useState()
        const refOne=useRef(0)
        const refTwo=useRef("")
        const paki=()=>{
            refTwo.current.focus()
            refTwo.current.value="Hamza Khan"
        }
        useEffect(()=>{
            refOne.current=refOne.current+1
        })
    return (
        <div>
            <p>Count the render Objecxt</p>
            <input placeholder="Name" value={wo} onChange={(e)=>setwo(e.target.value)} ref={refTwo}/>
            <h1>Your Name is {wo}</h1>
            <h1>Render Text is : {refOne.current}</h1>
            <br/>
            <p>Change the Value from the fields</p>
            <button onClick={paki}>Prexx Me</button>
        </div>
    )
}
// rough examople of use reff
export function Khan({props}) {
    const [one,setOne]=useState("")
    const refone=useRef("")
    const reftwo=useRef(0)
    
    useEffect(()=>{
        reftwo.current=reftwo.current+1
    },[])
    return(<div>
            <h1>ref</h1>

        <p>New fields </p>
             <input ref={refone} value={one} onChange={(e)=>setOne(e.target.value)}   />
                <h1> number Of Items  : {reftwo.current}</h1>

        </div>)

}


