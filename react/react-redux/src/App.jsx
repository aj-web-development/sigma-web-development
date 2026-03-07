import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import './App.css';
import { decrement, increment, multiply2 } from './redux/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>{' '}
        Counter is {count}{' '}
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(multiply2());
          }}
        >
          X 2
        </button>
      </div>
    </>
  );
}

export default App;
