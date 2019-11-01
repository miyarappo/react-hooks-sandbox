import React, { useContext, useState } from 'react'
import AppContext from '../contexts/AppContext'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [ title, setTitle] = useState('')
  const [ body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operationAt: timeCurrentIso8601()
    })

    setTitle('')
    setBody('')
  }

  const dleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: 'すべのイベントを削除しました',
        operationAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    window.confirm('全ての操作ログを本当に削除しても良いですか？') && dispatch({ type: DELETE_ALL_OPERATION_LOGS })
  }

  return (
    <>
      <h4>イベント作成フォーム</h4>
        <form>
          <div>
            <label htmlFor="formEventTitle">タイトル</label>
            <input id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="formEventBody">ボディー</label>
            <textarea id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
          </div>
          <button disabled={title === '' || body === ''} onClick={e => addEvent(e)}>イベントを作成する</button>
          <button disabled={state.events.length === 0} onClick={e => dleteAllEvents(e)}>全てのイベントを削除する</button>
          <button disabled={state.operationLogs.length === 0} onClick={e => deleteAllOperationLogs(e)}>全ての操作ログを削除する</button>
        </form>
    </>
  )
}

export default EventForm