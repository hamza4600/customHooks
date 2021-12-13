import React, { useEffect } from 'react'
import { useRef,useMemo } from 'react'
import { useState } from 'react'
// import dynamic from "next/dynamic"

// const NoSsr = props => (
//     <React.Fragment>{props.children}</React.Fragment>
//   )

// export default dynamic(() => Promise.resolve(NoSsr), {
//     ssr: false
//   })

export default function Memo() {
    return (
        <div>
            <h1>Use Memo</h1>
            <p>we will dicusee and exerises Memo hook </p>
            <p>mostaly used in Cataching the value of a api call or some calculating that it made that will make the componet redering slow     </p>
            <p>it hAve the depedenciy of the arary That will check if items are same then it don,t make calculation it not make the calculations </p>
            <p>use the Memory store the prev State in the memeory </p>
            {/* <NoSsr> */}
            <Jams/>

            {/* </NoSsr> */}
            
        </div>
    )
}


// example Oner

export function Jams(){
    const [po,setpo]=useState(1)
    const redds=useRef("")
    const double= useMemo(()=>{
        Slow(po)
    },[])

    useEffect(()=>{

        return (()=>{
            clearInterval(Slow)
        })
    },[])
    function Slow(num){
        console.log("Calling slow function")
        for(var i=10; i<=1000;i++){
            // do something
        }
        return num*2
    }
    const  [dark,setdark]=useState(false)
    const them={
        background:dark ? "black": "green",
        color:dark ? "green" : "black"
    }
    
    

    return(<div style={them}>
        <p>it double the number and run the LOop</p>
        <input  onChange={(e)=>setpo(e.target.value)} ref={redds}/>
        <h1>Double value is : {po*2}</h1>
        <p>Each time i enter text it run the loop and check then value of the (po) </p>
        <p>Now I have remove the value from the depedienciey array it will not run loop</p>
        <button onClick={()=>setdark(pre=>!pre)}> CHange Them</button>
        <p>On evey click it will change them </p>
    </div>)
} 