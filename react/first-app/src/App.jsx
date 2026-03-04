import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className='cards'>
        <Card title='Card 1' desc='This is the Card 1 description.' />
        <Card title='Card 2' desc='This is the Card 2 description.' />
        <Card title='Card 3' desc='This is the Card 3 description.' />
        <Card title='Card 4' desc='This is the Card 4 description.' />
      </div>

      <Footer />
    </>
  );
}

export default App;
