import Link from 'next/link'
import React, { useContext, useState, createContext } from 'react'

function ContextH() {
    return (
        <div>
            <h1>Use Context Hook</h1>
            <p>it is used for passing down Data to differnt components in the app </p>
            <p>If we lift up the state from compnet that will make complex our App  </p>
            <p>It has two parts Context Provider and Context Consumer Provide datat to componets </p>
            <p>Blow is an  example in whic I have nested compnets </p>
            <ChildOne/>
                <h1>Key Point</h1>
            <p>We have to wrape the compnet in whic we wnat our value if we didn,t wrap the provide children compnet it will Not work </p>
        </div>

    )
}

export default ContextH
// Child
export  const creatContex=createContext("")
export function ChildOne() {
        const [poi,setpoi]=useState("")
    return(<div>
        <creatContex.Provider value={{poi,setpoi}}>
        <p>This is first childern </p>
        <input placeholder="Type Text" onChange={(e)=>setpoi(e.target.value)}/>
        <Second/>
        </creatContex.Provider>

    </div>)
}
// second child
export function Second() {
    const themx={
        background: "black",
        width: "300px"
    }
    const {poi,setpoi}=useContext(creatContex)
    return(<div style={themx}>
        <p>Second Childern </p>
        <p>We will consume the value of the Child One</p>
        <h1>{poi}</h1>
        <p>we can also pass value to another page </p>
        <Link href="one"><button><a>One</a></button></Link>
        
    </div>)
}