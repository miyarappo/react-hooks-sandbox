import { INCREMENT, DECREMENT } from '../actions/counter'

type State = {
  value: number
}

const initialState: State = {
  value: 1
}

const reducer = (state: State = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value + 1}
    case DECREMENT:
      return {...state, value: action.payload.count}
    default:
      return state
  }
}

export default reducer