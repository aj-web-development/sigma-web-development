import { useContext } from 'react';
import { counterContext } from '../context/context';

const Component1 = () => {
  const counter = useContext(counterContext);
  return <div>Component1 counter : {counter.count}</div>;
};

export default Component1;
