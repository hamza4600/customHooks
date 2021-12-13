import React, { useContext, useState } from 'react'
import { Context, Hamzz } from './six'
// import {Context} from '../ben/six'

function One() {
    const {value,setValue} =useContext(Hamzz)
    return (
        <div>
            <p>Example of : {value}</p>

            <h1>UseSatet </h1>
            <p>Code examle are as</p>
            <OneTwo/>
            <Pakii/>
        </div>
    )
}

export default One

export  function OneTwo() {
    const [{count,count2},setCount]=useState({count:10,count2:20})
    return (
        <div>
            <p>We have Object on UseState and use manuplute Bothe using State</p>
            <p>we can uase two state or combine One  </p>
            <button 
            onClick={()=>
            setCount(current=>({
                count:current.count+5,
                count2:current.count2
            }))
            }
            >Prexx Me</button>
            <h1>count 1 : {count}</h1>
            <h1>count 2 : {count2}</h1>
        </div>
    )
}
// useForm

export function Pakii() {
    const [value,handelChange]=useForm({email:"",password:""})
    return(<div>
        <h1>useForm</h1>
        <p>we  also defina our own Logic and Custom Hooks as we want if we don,t define then we have to write the Hooks again and again Here is a Example </p>
        <p>Same LOgic on Input Filds</p>
        <input type="email" placeholder="Email" value={value.email} onChange={handelChange}/><br/>
        <input type="password" placeholder="Password" value={value.password} onChange={handelChange}/>
        <p>Use the same Logic and apply on Items</p>
        <h1>{value.email}</h1>
    </div>)
}
// defina our own cystom Hook
export const useForm= initailvalue=>{
    const [value,setValue]=useState(initailvalue);
    return[value,
        e=>{
            setValue({
                ...value,
                [e.target.name]:e.target.value
            })
        }
    ]
} 