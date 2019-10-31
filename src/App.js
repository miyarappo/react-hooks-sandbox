import React, { useState } from 'react';

const App = () => {

  return (
    <div>
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label htmlFor="formEventTitle">タイトル</label>
          <input id="formEventTitle" />
        </div>
        <div>
          <label htmlFor="formEventBody">ボディー</label>
          <textarea id="formEventBody" />
        </div>
        <button>イベントを作成する</button>
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
