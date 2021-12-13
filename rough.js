import React ,{createContext, useContext, useEffect, useMemo, useReducer, useRef, useState} from 'react'

function Rough() {
    const{bb,setbb}=useContext(Top)
    return (
        <div>
            <div>
                
                <h1>Practice of Hooks</h1>
                <h1>Vale :  {bb}</h1>
                <p></p>
                <p></p>
                <p></p>
                <Hammm/>
                <Uppp/>
                <Jama/>
                <Yoyo/>


            </div>
        </div>
    )
}

export default Rough
// Code works as  same way  emty state and current value count+
export function Hammm() {
    const [gh,setgh]= useState()
    const refOne=useRef("")
    const refTwo=useRef(0)
    const jhg=(e)=>{
        setgh(e.target.value)
    }
    useEffect(()=>{
        refTwo.current=refTwo.current+1
    })
    const popo=()=>{
        refOne.current.focus()
        refOne.current.value="Hamza"
    }
    return(
        <div>
            <p>useState and ref and useeffect Hooks</p>
            <input placeholder="Name" ref={refOne} onChange={jhg}/>
            <h1>text : {gh} Items : {refTwo.current}</h1>
            <button onClick={popo}>Press Me</button>
        </div>
    )
}
// context Hooks  error
const Top=createContext("")
export function Uppp() {
    const [bb,setbb]=useState("")
    const reffd=useRef("")
    const meory=useMemo(()=>(
        {bb,setbb}
    ),[bb,setbb])
    return(<div>
        <Top.Provider value={meory} >
        <p>Pasas state to compnets</p>
        <input ref={reffd} onChange={(e)=>setbb(e.target.value)}/>
        <p>Value apss to top of Page : {bb}</p>
        <p>we have to destructur it and then use the Value</p>
        <p>It works in a way that we have to palce the componets we want to pass  value od state  </p>
        <Hill/>
        </Top.Provider>
    </div>)    
}
// Childrn componet 
export function Hill() {
    const {bb}=useContext(Top)
    return(<div>
        <h2>Childrn value is : {bb}</h2>    
    </div>)
}
// call back


// useReducer onnactions 
// one
export function Jama() {
    function Reducc(state,action) {
        switch (action.type) {
            case "increse":
                return  state*2
                break;
            case "decrese":
                return state/2
            default:
                return {state}
                break;
        }

    }
    // const [oi]=useState(0)
    const [count,dispatch]=useReducer(Reducc,1);
    // Reducer Functions 
    return(<div>
        <h1>Reducer in Action</h1>
        <p>State : {count}</p>
        <button onClick={()=>dispatch({type: "increse"})}>Increse</button>
        <button onClick={()=>dispatch({type: "decrese"})}>Decrese</button>
    </div>)
}
// seconds example of use reducer
export function Yoyo() { 
    function rude(state,action) {
        switch (action.type) {
            case "add-todo":
                return {
                    todo:[...state.todo,{text:action.text,completed:false}]
                }
                break;
        
            default:
                break;
        }
    }
    const [{todo,todoCount},dispatch]=useReducer(rude,{
        todo:[]
    })
    const [text,settext]=useState("")
    return(<div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type:"add-todo",text})
        }}>
            <input onChange={(e)=>settext(e.target.value)}/>
            <p>{JSON.stringify(todo,null,2)}</p>
        </form>
    </div>)
}





// custom Hooks
