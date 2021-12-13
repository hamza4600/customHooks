import React, { useReducer } from 'react'
import { useState } from 'react'

function Reduxx() {
    return (
        <div>
            <h1>Use Reduxx</h1>
        <p>Quite similar to redux</p>
        <p>It store the state of the componet on the action we take </p>
        <p>Two amin Parts Reducer Function and Inital State</p>
        <p>Reducer Function have two parameter State and Actions  Mostaly used in deep nestaed componets  and their actions  </p>
        {/* <Onex/> */}
        <Twoo/>
        <Todo/>
        </div>
    )
}

export default Reduxx
// One
 const Action={
    Increament:"increse",
    Decrese:"decrese"
}

export function Onex(){
    const [count]=useState(0)
    const [state,dispatch]=useReducer(Reducer,{count:0})    
    function Reducer(state,action) {
        switch (action.type) {
            case Action.Increament:
                return {count: state.count+5}
                break;
            case Action.Decrese:
                return {count: state.count-5}
            default:
                return {state}
                break;
        }
    }
    function incrse() {
        dispatch({type: Action.Increament})
    }
    function decrese() {
        dispatch({type: Action.Decrese})
    }
    
    return(<div>
        <p>we have simple Reducer  example in whic state will change on The type of actions</p>
        <h1>number : {count}</h1>
        <button onClick={incrse}>Increser</button>
        <button onClick={decrese}>Decrese</button>
    </div>)
}

// same example above
export function Twoo() {
    function reduu(state,action) {
        switch (action.type) {
            case "increse":
                return state+10
                break;
            case "decrese":
                return state-10
            default:
                return {state   }
            }}
    const [coun,dispatch]=useReducer(reduu,0);
    return(<div>
        <p>Exampl of Use Reducer</p>
        <h1>Value is  {coun}</h1>
        <button onClick={()=>dispatch({type:"increse"})}>Increse</button>
        <button onClick={()=>dispatch({type:"decrese"})}>Decrese</button>
        <p>Now we have define different state on different actions </p>
    </div>)
}
// SIMPLE TODO  in reducer Hook 
// todo is an  Object and hold state in an aray
export function Todo() {
    function reducer(state,action) {
        switch (action.type) {
            case "add-todo":
                return {
                    todo:[...state.todo, {text:action.text, completed:false}],
                    todoCount:state.todoCount+1
                };
                break;
            case "togal":
                return {
                    todo: state.todo.map((t,idx)=>
                    idx===action.idx ? { ...t,completed:!t.completed}:t),
                    todoCount:state.todoCount
                }

            default:
                break;
        }

    }  //we will also count the number od state changing 
    const [{todo,todoCount},dispatch]=useReducer(reducer,{
        todo:[],
        todoCount:0    
    });
    const [text,settext]=useState("")
    const them ={
        background:"black",
        width:"max-content",
        cursor:"pointer"
    }
    return(<div>
        <p>Simple Todo in Reducer Hooks example </p>
        <p>In dispatch we have to define the state type of action and state </p>
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type:"add-todo",text})
            settext("") 
        }}>
            <input placeholder="Todo " onChange={(e)=>settext(e.target.value)}/>
        </form>
        {/* <p>{JSON.stringify(todo,null,2)}</p> */}
        {todo.map((t,idx)=>(
            <div onClick={()=> dispatch({type:"togal",idx})} 
            style={them} key={t.text}>{t.text}</div>
        ))}
        <p style={{color:"blue"}}> Number of counts are : {todoCount}</p>
        <p>we have simply created an arry and appent the Object in the aary when we press enter </p>
        <h1>reducerHook</h1>
        <p>In complex app or components when we clik on a components or something else we can add multiple actions and state on the action </p>
        <p>A single state changing leads towArds multiple things in state changing  and is easy to put logic </p>
    </div>)
}