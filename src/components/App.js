import React, { useReducer } from 'react'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import Events from './Events'

console.log(AppContext)

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm />
      <Events />
    </AppContext.Provider>
  );
}

export default App;
