import React, { createContext } from 'react'

function Mix() {
    return (
        <div>
            <div>
           <h1>UeContext Hook</h1>
           <p>Passing state to the app</p>
            <p>Main Point we have to wrape the components what ever components we want to supply the value </p>
            <p>Then we can get the value in the Childern components  </p>            
        </div>
        </div>
    )
}

export default Mix

export const Hamzz=createContext()
