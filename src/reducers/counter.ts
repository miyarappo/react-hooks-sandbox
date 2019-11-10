// action
const INCREMENT = 'INCREMENT'　as const
const DECREMENT = 'DECREMENT' as const

// action creator
export const increment = (value: number) => ({
  type: INCREMENT,
  payload: {
    value
  }
})

export const decrement = (value: number) => ({
  type: DECREMENT,
  payload: {
    value
  }
})

export type Actions = (
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
)

// state
export type State = {
  value: number
}

const initialState: State = {
  value: 1
}

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value + action.payload.value}
    case DECREMENT:
      return {...state, value: state.value - action.payload.value}
    default:
      return state
  }
}

export default reducer