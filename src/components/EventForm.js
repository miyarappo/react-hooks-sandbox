import React, { useState } from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions'

const EventForm = ({ state, dispatch }) => {
  const [ title, setTitle] = useState('')
  const [ body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

  const dleteAllEvents = e => {
    e.preventDefault()
    window.confirm('全てのイベントを本当に削除しても良いですか？') && dispatch({ type: DELETE_ALL_EVENTS })
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
          <button disabled={state.length === 0} onClick={e => dleteAllEvents(e)}>イベントを削除する</button>
        </form>
    </>
  )
}

export default EventForm