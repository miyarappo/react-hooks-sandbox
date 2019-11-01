import React, { useReducer } from 'react'
import reducer from '../reducers'
import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import Events from './Events'
import  OperationLogs from './OperationLogs'

console.log(AppContext)

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm />
      <Events />
      <OperationLogs />
    </AppContext.Provider>
  );
}

export default App;
