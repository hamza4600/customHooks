// hoooks exemlies and Practice
import { useState } from "react";
// use State
function HookState() {
    const [state,setState]=useState("")
    const [stat,setStat]=useState("Hamza")
    const [number,setnumber]=useState(0)
    const pap=()=>{
        setStat("Pakistan") 
    }

    const increase=()=>{
        setnumber(number+1)
        console.log(number)
        
    }
    const decrese=()=>{
        setnumber(number-1)
        console.log(number)
    } 
    const inpuu=(e)=>{
        const  aqq=e.target.value
        const  aq= String(aqq).toUpperCase()
        setState(aq)
        console.log(aqq)
        if (aq==="HAMZA"){
            alert("yOU ARE THE  ADMIN")
        }
    }
    return (
        <div>
            <h1>use state </h1>
            <h2>Simple example of use State </h2>
            <input onChange={inpuu}  />
            <p>Second example state is {stat}! onclick it will change</p>
            <button onClick={pap} >Prexx Me</button>
            {/* another example */}
            <h3>Counte is : {number}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrese}>Decrease</button>
            <h2>Text is in Upper case :  {state}</h2>
            <p>we can also pass down props to differnt components and in usestate we can also define a Object with key and value  </p>
            <ObjectState/>
        </div>
    )
}

export default HookState

// object in the state
export function ObjectState() {
        const [taz,setTaz]=useState({id:"01",nam:"hamza",age:"25",city:"Haripure"})
    const vie=()=>{
        console.log(taz)
        console.log("Default Values are :")
    }
        return (
        <div>
            <p>Exapmle as a object in the state we can also viw on the console </p>
            <button onClick={vie}>State Object</button>
            <li>{JSON.stringify(taz)}</li>
        </div>
    )
}


