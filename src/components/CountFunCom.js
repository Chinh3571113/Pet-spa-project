import React, { useState } from 'react'

export default function CountFunCom() {
    const [count, setCount] = useState(0);
  return (
    <div>CountFunCom
        <p>{count}</p>
        <button onClick={() => setCount(count+1)} >Click</button>
    </div>
  )
}
