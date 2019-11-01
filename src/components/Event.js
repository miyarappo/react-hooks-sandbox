import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions'
import { timeCurrentIso8601 } from '../utils'


const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)

  const deleteEvent = id => {
    dispatch({
      type: DELETE_EVENT,
      id
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベント(id=${id})を削除しました`,
      operationAt: timeCurrentIso8601()
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