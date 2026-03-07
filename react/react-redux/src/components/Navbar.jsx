import { useSelector } from 'react-redux';

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>Navbar Counter : {count}</div>;
};

export default Navbar;
