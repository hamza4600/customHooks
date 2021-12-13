import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from './one'

function Ttwo() {
    const [lop,setlop]=useState("")
    
    useEffect(() => {
        const Mouse=(e)=>{
            console.log(e)
    }
    

    window.addEventListener("mousemove",Mouse)
    
        
    return () => {
        window.removeEventListener("mousemove",Mouse)
        }
    }, [])
    return (
        <div>
            <h1>UseState</h1>
            <p>Use to re-rendr compontes as we want in array dependancy</p>
            <input   onChange={(e)=>setlop(e.target.value)} />
            <h1>{lop} </h1>
        </div>
    )
}

export default Ttwo

export function Thrre() {
    
    return(<div>
        <p>we can use as much Hooks as we want in a compnets</p>
        <p>creat a fetch Hooks</p>       
    </div>)
}
// custom hook we passin Url aand get the staTE OF dATA IN TEXT WE WNAT 

// USE INA COMPNET
export function Foure(){
    const [coun,setcoun]=useState(2)
    const [data,setdata]=useState([])
    const memory=useMemo(()=>(
        {data,setdata}
    ),[data,setdata])

        useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${coun}`)
        .then(respon=>respon.json())
        .then(json=>setdata(json))
        return ()=>{
            
        }    
        },[coun])
        const jahh={
            background:"black"
        }
        useEffect(()=>{
            localStorage.setItem("data",JSON.stringify(data))
        },[coun])
    return(<div>
        <h1>useUrl Hooks</h1>
        <p>datat from number API</p>
        <p>{ coun}</p>
        <p style={jahh}>{JSON.stringify(data)}</p>
        <p>wee want to make it Dyanamic Onbutton Cahange the Data</p>
        <button onClick={()=>setcoun(coun=>coun+1)}>Prexx Me</button>
        <p>data is being fetch and update in UI </p>
        <p>we can also use  Local Storage or increasing the catching the of Data or Memo Hook</p>
        <p>we will use anothe useeffect Hok or catching</p>
        <p>If we refresh the page then it will get the data from the local storage </p>
    </div>)
}

// defina Hookm but is not working
export const useFetch = (url)=> {
    const [state,setState]=useState({data:null, loading:true})
    useEffect(()=>{
        setState(state=> ({data:state.data, loading:true}));
        fetch(url)
        .then(x=>x.text())
        .then(y=>{
             setState({data:y,loading:false})
         })
    },[url]);
    return state
}