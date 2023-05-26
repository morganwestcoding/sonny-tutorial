import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {

    setCount(count + 1) //CORRECT
  }

  const decrement = () => {

    setCount(count - 1) //CORRECT
  }

  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is {count}</p>
      <button onClick={increment}>-</button>
      <button onClick={decrement}>+</button>
    </div>
  );

}


export default App;