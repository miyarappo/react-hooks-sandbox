import React from 'react'
import { useSelector } from 'react-redux'
import { useAsyncActions } from '../actions/counter'

const Counter = () => {
  const count = useSelector(state => state.value)
  const { incrementAsync } = useAsyncActions()

  return (
    <div>
      <h1>Redux & Hooks</h1>
      <div>{count}</div>
      <button onClick={() => incrementAsync(1)}>increment</button>
      <button>set_count</button>
    </div>
  )
}

export default Counter