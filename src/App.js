import React, { useReducer, useState, useEffect } from 'react'
import reducer from './reducers'
import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS
} from './actions'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])
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

  const deleteEvent = id => {
    dispatch({
      type: DELETE_EVENT,
      id
    })
  }

  const dleteAllEvents = e => {
    e.preventDefault()
    window.confirm('全てのイベントを本当に削除しても良いですか？') && dispatch({ type: DELETE_ALL_EVENTS })
  }

  const unCreatable = title === '' || body === ''

  return (
    <div>
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
        <button disabled={unCreatable} onClick={e => addEvent(e)}>イベントを作成する</button>
        <button disabled={state.length === 0} onClick={e => dleteAllEvents(e)}>イベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map(event => {
              return (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.title}</td>
                  <td>{event.body}</td>
                  <td>
                    <button type='button' onClick={() => deleteEvent(event.id)}>削除</button>
                  </td>
              </tr>
              )})
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;
