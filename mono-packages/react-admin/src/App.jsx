import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    console.log('12313');
    const _count = count + 1;
    setCount(_count);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => btnClick()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default App;
