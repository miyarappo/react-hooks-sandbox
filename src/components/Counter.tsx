import React from 'react'
import { useSelector } from 'react-redux'
import { useAsyncActions } from '../actions/counter'
import { State } from '../reducers/counter'

const Counter: React.FC = () => {
  const count = useSelector<State, number>(state => state.value)
  const { incrementAsync, decrementAsync } = useAsyncActions()

  return (
    <div>
      <h1>Redux & Hooks</h1>
      <div>{count}</div>
      <button onClick={() => incrementAsync(1)}>increment1</button>
      <button onClick={() => incrementAsync(10)}>increment10</button>
      <button onClick={() => decrementAsync(1)}>increment10</button>
      <button>set_count</button>
    </div>
  )
}

export default Counter