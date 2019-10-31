import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Event from './Event'

const Events = () => {
  const { state } = useContext(AppContext)

  return (
    <>
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
              state.events.map(event => {
                return (
                  <Event key={event.id} event={event} />
                )})
              }
          </tbody>
        </table>
      </>
  )
}

export default Events