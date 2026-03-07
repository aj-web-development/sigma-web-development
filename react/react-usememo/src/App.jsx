import { useMemo, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // Expensive computation
  // const magical = numbers.find((item) => item.isMagical);

  // To handel these kind of expensive operation and skip on every rerender of component
  // in below if numbers change then only this computation will calculated again
  const magical = useMemo(() => numbers.find((i) => i.isMagical), [numbers]);

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>

        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
            if (count == 0) {
              setNumbers(
                new Array(10_000_000).fill(0).map((_, i) => {
                  return {
                    index: i,
                    isMagical: i === 9_000_000,
                  };
                })
              );
            }
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
