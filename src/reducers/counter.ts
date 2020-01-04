// action
const INCREMENT = 'INCREMENT'　as const
const DECREMENT = 'DECREMENT' as const
const GET_USER = 'GET_USER' as const

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

export const getUser = (user: User) => ({
  type: GET_USER,
  payload: {
    user
  }
})

export type Actions = (
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof getUser>
)

// state
export type User = {
  name: string,
  age: number
}

export type State = {
  value: number
  user: User | null
}

const initialState: State = {
  value: 1,
  user: null
}

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value + action.payload.value}
    case DECREMENT:
      return {...state, value: state.value - action.payload.value}
    case GET_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}

export default reducer