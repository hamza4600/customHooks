import React from 'react'

function Store({head,para}) {
    const them={
        width:"420px"
    }
    return (
        <div>
            <h1>{head}</h1>
            <div style={them}>{para}</div>
</div>    )
}

export default Store
