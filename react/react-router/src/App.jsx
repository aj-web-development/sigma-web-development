import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import User from './components/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar /> <Home />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar /> <Login />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar /> <About />
      </>
    ),
  },
  {
    path: '/user/:username',
    element: (
      <>
        <Navbar /> <User />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
