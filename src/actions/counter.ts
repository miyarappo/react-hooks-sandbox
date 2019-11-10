import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counter'

// suspense

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

  return { incrementAsync, decrementAsync };
}

// dummy networking utility
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis))
}
