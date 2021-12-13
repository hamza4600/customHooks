import React, { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react'

function Cllback() {
    return (
        <div>
            <h1>useCallback</h1>
            <p>it is quite similar to the use Memohooks  </p>
            <p>When React re-render a  components It re-create theses functions even they look same and same defination  but they are not same beacuse they a have same referential equality  so we use Call back Hook </p>
            <p>Refentail Equality means that they have diffetnt memeory addreses and diffetnt shampes but look same  </p>
            <p>mostaly used when we have components in which childern are re-rendering again and again without need It have depediency of array </p>
            <p>array check if state is chnae or not </p>
            <p>it OPTIMZE and prevent uncessory re-rending of the componet </p>
            <CallMe/>
        </div>
    )
}

export default Cllback
// example one 
export function CallMe() {
    const [tww,settww]=useState("")
    const refdd=useRef("")
    const num1=useState(10)
    const num2=useState(20)
    const [result,setresult]=useState(0)
    
    // sum function state of num1 and  num2 is not changing 
    const sum=useCallback(()=> num1+num2 ,[num1,num2])
    // dependiency arry is now the sum if sum change it re-render the compnet 
    useEffect(()=>{
        console.log(`Sum is ": ${sum()}`)
        setresult(sum())
    },[sum()])

    return(<div>
        <p>use all Hooks to prevent re-rendeing loop </p>
        <input ref={refdd} onChange={(e)=>settww(e.target.value) } placeholder="name Of city" />
        <p>Value is : {tww}</p>
        <p>Sum is {result}</p>
        <p>we have  to wrape the function with callback for not re-rendering</p>
    </div>)
}
// two
export function Twoo() {
    
    return(<div>
        
    </div>)
}