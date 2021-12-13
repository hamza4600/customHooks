 import {useState ,useEffect} from 'react'
 
 function Effects() {
     return (
         <div>
             <h1>useEffect Hook</h1>
                    <p>it is used to re-render components that we want Have a dependices of arry and check if elemt in array changes it re-render the element  </p>
                    <p>Is used insted of componentsDidMount</p>
                    <p>It also have side effect cleanUp means it clean up the function that have run or remove the evnte Handelers that have occure </p>
                    <p>it increase the performance of  app mostaly used in actions and events handelers</p>         
                    <p>accept two argumnet callback ,[dependices] </p>
                    <p>calback is function that conatin side effect logic  is exicuted right after change is being  pushed </p>
                    <p>Empty array mean that run ion intail render </p>         
                    <p>side effrects : Outside of fucnction being exicuted api call , etc </p>
         
                    {/* <One props="pakistan"/> */}
                    <Resize/>
                    <Foure/>
         </div>
     )
 }
 
 export default Effects

 //  example one 
export function One({props}) {
        
    useEffect(()=>{
        var id=setInterval(() => {
            console.log(props)
        }, 3000);
        return ()=>{
            clearInterval(id)
        }
    },[props])
        return (
        <div>
            <p>I am console.log {props} </p>
        </div>
    )
}

// two
export function Resize() {
        const [re,setRe]=useState("")
        const handel=()=>{
            setRe(window.innerWidth)
        }
        useEffect(()=>{
            window.addEventListener('resize',handel)
            console.log("Inner Height is changing")
            return ()=>[
                clearInterval(handel)
            ]
        },[re])
    return (
        <div>
            <h1>inner Height is {re}</h1>
            <p>when ever we will change the innerWidth it will re-render the components</p>
            <p>If array is empty then it will render on initail state</p>
        </div>
    )
}
// Three 
export function Foure() {
    const [po,setpo]=useState("")
        useEffect(()=>{
            console.log("applyinh The changing")
        },[po])
    return (
        <div>
        <p>On Btton click change state useing effect</p>
        <h1>{po}</h1>
        <button onClick={()=>setpo("Pakistan")}>Pak</button>            
        <button onClick={()=>setpo("America")}>Usa</button>            
        <button onClick={()=>setpo("United Kindom")}>UK</button>            
            <p>It check the dependiny array if item is same them will not re-render if change then will render</p>
        </div>
    )
}






