import React, { useReducer, useState } from 'react'

function Five() {
    return (
        <div>
            <h1>Use reducer</h1>
            <p>Simple example </p>
            <p></p>
            <Reddd/>
        </div>
    )
}

export default Five
//one
export function Reddd() {
    // const [we,setwe]=useState(0)
    function redf(state,action) {
        switch (action.type) {
            case "increse":
                return state+10
                break;
            case "decrese":
                return state-10    
                break;
            case "reset":
                return 0     
            case "multi":
                return state*5    
            default:
                return state
                break;
        }
    }
    const [count,dispatch]=useReducer(redf,10)
    return(<div>
        <p>Chaneg the state on differnt actions</p>
        <button onClick={()=>{dispatch({type:"increse"})}}>Increse</button>
        <button onClick={()=>{dispatch({type:"decrese"})}}>Decrese</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <button onClick={()=>dispatch({type:"multi"})}>Mutli 5</button>
        <h1>{count}</h1>
        <p>we can also more action on a state </p>


    </div>)

}