import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// promiseのresolveの書き方
// custom_hooks
// useCallback
// 型付
// suspense

export const useAsyncActions = () => {
  const dispatch = useDispatch();

  const incrementAsync = useCallback(async (value) => {
    await sleep(500); // dummy networking
    dispatch({
      type: INCREMENT,
      payload: {
        value
      }
    });
  }, [ dispatch ]);

  const decrementAsync = useCallback(async (value) => {
    await sleep(500); // dummy networking
    dispatch({
      type: DECREMENT,
      payload: {
        value
      }
    });
  }, [ dispatch ]);

  return { incrementAsync, decrementAsync };
}

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// export type Actions = (
//   | ReturnType<typeof increment>
//   | ReturnType<typeof setCount>
// )


