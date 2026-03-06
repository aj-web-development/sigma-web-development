import { useContext } from 'react';
import { counterContext } from '../context/context';
import Component1 from './Component1';

const Button = () => {
  const counter = useContext(counterContext);

  return (
    <div>
      <button onClick={() => counter.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>{' '}
        I am a button
      </button>
    </div>
  );
};

export default Button;
