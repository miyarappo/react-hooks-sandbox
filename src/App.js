import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(1)
  console.log({count}, {setCount})

  const increment = () => setCount(count + 1)
  const increment2 = () => setCount(previousCount => previousCount + 1 )
  const divide3 = () => setCount(previousCount => previousCount % 3 === 0 ? previousCount / 3 : previousCount)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
