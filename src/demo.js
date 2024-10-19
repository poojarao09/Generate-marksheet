import React from 'react'

function demo() {
    const first=(a)=>{
        alert('succesfull')
    }
  return (
    <div>demo
        <button onClick={(a) =>first(a)}>click</button>
    </div>
  )
}

export default demo