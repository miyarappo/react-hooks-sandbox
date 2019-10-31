import React, { useReducer, useState, useEffect } from 'react'
import reducer from './reducers'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])
  const [ title, setTitle] = useState('')
  const [ body, setBody] = useState('')

  const addEvent = e => {
    console.log('call addEvent', e)
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

  const deleteEvent = id => {
    console.log('call deleteEvent')
    dispatch({
      type: 'DELETE_EVENT',
      id
    })
  }

  console.log('currentState', {state})

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
        <button onClick={e => addEvent(e)}>イベントを作成する</button>
        <button>イベントを削除する</button>
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
