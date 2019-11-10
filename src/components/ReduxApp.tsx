import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers/counter'
import Counter from '../components/Counter'

const store = createStore(reducer)

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default ReduxApp