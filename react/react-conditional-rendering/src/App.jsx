import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  // const [count, setCount] = useState(0);
  const [showBtn, setSetshowBtn] = useState(true);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn ? (
        <button>I will be show when another button is clicked</button>
      ) : (
        'Ghant...!'
      )} */}
      {/* // Below is same as above */}
      {showBtn && <button>I am show button</button>}
      <div className='card'>
        <button onClick={() => setSetshowBtn(!showBtn)}>
          Click me to Hide/Show button
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
