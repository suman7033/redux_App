import React, { useState } from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber } from './Action/action'

const App = () => {
  const myState=useSelector((state)=> state.changeNumber)
  const dispatch =useDispatch();
  return (
    <div>
      <h1>ReduxDemo</h1>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div>
        <button title='Decrement' onClick={()=> dispatch(decNumber())}>-</button>
        <input name='quantity' value={myState}/>
        <button title='Increment' onClick={()=> dispatch(incNumber())}>+</button>
      </div>
    </div>
  )
}

export default App
