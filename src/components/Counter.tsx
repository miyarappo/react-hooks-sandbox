import React, { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useAsyncActions } from '../actions/counter'
import { State, User } from '../reducers/counter'

const Counter: React.FC = () => {
  const count = useSelector<State, number>(state => state.value)
  const user = useSelector<State, User | null>(state => state.user)
  const { incrementAsync, decrementAsync, getUserAsync } = useAsyncActions()

  useEffect(() => {
    getUserAsync()
  }, [])

  return (
    <div>
      <h1>Redux & Hooks</h1>
      <h2>user info</h2>
      <Suspense fallback={<div>loading...</div>}>
        <div>
          <div>{user && user.name}</div>
          <div>{user && user.age}</div>
        </div>
      </Suspense>
      <div>{count}</div>
      <button onClick={() => incrementAsync(1)}>increment1</button>
      <button onClick={() => incrementAsync(10)}>increment10</button>
      <button onClick={() => decrementAsync(1)}>increment10</button>
    </div>
  )
}

export default Counter