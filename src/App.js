import React, { useReducer, useState } from 'react'
import reducer from './reducers'

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, [])
  const [ title, setTitle] = useState('')
  const [ body, setBody ] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })
    setTitle('')
    setBody('')
  }

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
          <textarea id="formEventBody" value={body} onChange={e => setBody(e.target.body)} />
        </div>
        <button onClick={addEvent}>イベントを作成する</button>
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

        </tbody>
      </table>
    </div>
  );
}

export default App;
