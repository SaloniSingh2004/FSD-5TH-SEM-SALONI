import React, { UseState } from 'react'

const Count = () => {
    const [count,setCount]=UseState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
  return (
    <div>
      <button onClick={increment}>Add</button><br />
      <span>{count}</span><br />
      <button onClick={decrement}>Subtract</button>
    </div>
  )
}

export default Count