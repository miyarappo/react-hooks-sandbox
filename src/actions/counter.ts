import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, getUser } from '../reducers/counter'

export const useAsyncActions = () => {
  const dispatch = useDispatch();

  const incrementAsync = useCallback(async (value: number): Promise<void> => {
    await sleep(1000);
    dispatch(increment(value));
  }, [ dispatch ]);

  const decrementAsync = useCallback(async (value: number): Promise<void> => {
    await sleep(500);
    dispatch(decrement(value));
  }, [ dispatch ]);

  const getUserAsync = useCallback(async (): Promise<void> => {
    await sleep(1000)
    const user = {
      name: 'miyata',
      age: 27
    }
    dispatch(getUser(user))
  }, [ dispatch ])

  return { incrementAsync, decrementAsync, getUserAsync };
}

// dummy networking utility
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis))
}
