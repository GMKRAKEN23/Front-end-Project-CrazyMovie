import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Content from '../src/pages/Homepage/HomePage';
import NavBarBottom from './components/NavBarBottom/NavBarBottom';
import './App.css';
import Logo from './components/Logo';

function App() {
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <>
          <Header />
          <Content />
          <NavBarBottom />
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Logo/>
          <h1 className='text-5xl text-white'>Mobile version only available!</h1>
        </div>
      )}
    </>
  );
}

export default App;
