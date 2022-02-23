import React, { useEffect ,useReducer, useRef} from 'react'

function hooks() {
  return (<div>
      <style jsx>{`
        .sticky {
            position: sticky;
            top: 0;
            z-index: 10;
        }
        .top-0 {
            top: 0;
        }
        // center the header
        .flex {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

        }
    `}</style>

        <div className='flex justify-center align-center  '>
            <div className={"flex"}>
              <h1>Use Reducer Hooks</h1>
                <Ree/>

            </div>
        </div>

  </div>)
}
export default hooks

export function Ree(){
    return(<div className='bg-black border-rounded m-3 p-3 max-w-[550px]'  >
        <h2>parts of useReducer Hook</h2>
        <p><span className='text-sky-600 font-bold p-2'>state</span>State of a component </p>
        <p><span className='text-sky-600 font-bold p-2'>dispatch</span>is a special function that dispatch an Action Object</p>
        <p><span className='text-sky-600 font-bold p-2'>Reducer</span>A function that accept 2 parameter current Sate and action Obejct  and Depend on action Object update the State </p>
        <p><span className='text-sky-600 font-bold p-2'>inital State</span> Inital state of of Value</p>
        <p><span className='text-sky-600 font-bold p-2'>Action</span>Define How to update the Update the State</p>
        <p>Creating a stop woatch with reducer Hook</p>
        <UseReducerHook/>

    </div>)
}
export function UseReducerHook(){
    const initalState = {
        isRunning: false,
        count: 0,
       } 
    const [state, dispatch]=useReducer(reducer, initalState)
       const idRef=useRef(0)
       useEffect(() =>{
         if(!state.isRunning){
             return
         }
         idRef.current = setInterval(() => {
                dispatch({type: 'tick'})
            }
            , 1000)
            return () => clearInterval(idRef.current)
         }, [state.isRunning])

        
         function reducer(state,action){
        switch (action.type) {
            case 'start':
              return { ...state, isRunning: true };
            case 'stop':
              return { ...state, isRunning: false };
            case 'reset':
              return { isRunning: false, count: 0 };
            case 'tick':
              return { ...state, count: state.count + 1 };
            default:
              throw new Error();
        }
    }


    console.log(state.count)

    const btn='w-15 h-10 rounded-lg bg-slate-200 text-violet-800 m-2 p-2 hover:bg-white' 
    return(<div className='m-3 p-3 '>
        <div>
            <h3>useReducer Hook Stop watch</h3>
                <h1 className='relative text-2xl left-20  text-blue-500  w-15 h-15 font-extrabold'>{state.count}</h1>
            <button onClick={()=> dispatch({type: "start"})} className={btn}>Start</button>
            <button onClick={()=> dispatch({type: "stop"})} className={btn}>Stop</button>
            <button onClick={()=> dispatch({type: "reset"})} className={btn}>Restart</button>
            <button onClick={()=> dispatch({type: "tick"})} className={btn}>Tick</button>
               
        </div>
        <p className='text-sm font-thin'>In above example we have four differnt buttons that are changing the state of the component</p>
    </div>)
}
