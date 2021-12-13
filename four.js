import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'

function Four() {
    return (
        <div>
            <h1>Pass data and ACtion to childern Componet</h1>
            <Mainn/>
            <p>We have change the state of the One Componet on other Componet and pass a props</p>
            <p>we have a Problum with Optmization when the atte is chane elemnt is re-created and re-render  that make app aslow so useCallbackHook </p>
            <h1>Use Memo </h1>
            <p>It is mOstsaly used for performace and not to re-compute the expansive calculation again and again Make app fast </p>
            <p>In some case we are re-calculating the value and the value is not change the use Memo  will remember the value in a Memory and compare the vale in the dependancy array
          </p>
          <p>This happen because of chnage the state will re-render the Componet and run the functions or Api call that make a bit Slow so </p>
          <MemeMe/>
        </div>
    )
}

export default Four
// one
export function Mainn(){
    const [kj,setkj]=useState(0)
    console.log("Helo")
    const increment=useCallback(()=>{
        setkj(c=>c+5)
    },[setkj])
    return(<div>
        <Hello increse={increment}/>
        {/* <Hello increse={()=>setkj(kj+1)}/> */}
        <p>{kj}</p>
    </div>)
}

// two
export function Hello({increse}){
    
    return(<div>
        <button onClick={increse}>Prexx Me</button>
    </div>)
} 
// useMemo
export function MemeMe() {
    const [oio,setoio]=useState(5)
    function loo(oio) {
        for(let i=1;i<=2;i++){
            console.log("Hamza Looop is running")
        }   
        return setoio(p=>p*2)
    }
    const Money=useMemo(()=>loo,[oio])
    return(<div>
        <p>Loop will run on chnage the state</p>
        <button onClick={Money}>Prex Me</button>
        <h1>{oio}</h1>
        <p>After using Memo it will compute value </p>
    </div>)
}



// custom Hook
const useMeasure=(deps)=>{
    const [react,setReact]=useState({})
    const reffs=useRef()
    useLayoutEffect(()=>{
        setReact(reffs.current.getBoundingClientReact())
    },deps)
    return [react,reffs]
}