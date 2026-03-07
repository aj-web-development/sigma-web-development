import { useCallback, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState('Good');

  // React Compiler automatically memoizes values and functions.
  // in this casee Navbar is not rerendered unless getAdjective or adjective is changed
  // Check count button onClick
  const getAdjective = useCallback(() => {
    return `It is ${adjective}`;
  }, [adjective]);

  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />

      <div>
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

            if (count === 5) setAdjective('Bad');
            if (count === 10) setAdjective('Ok');
            if (count === 15) setAdjective('Good');
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
