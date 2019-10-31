import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import {
  DELETE_EVENT,
} from '../actions'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)

  const deleteEvent = id => {
    dispatch({
      type: DELETE_EVENT,
      id
    })
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type='button' onClick={() => deleteEvent(event.id)}>削除</button>
      </td>
    </tr>
  )
}

export default Event