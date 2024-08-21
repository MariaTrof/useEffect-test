import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 });
  const [lineOpacity, setLineOpacity] = useState(1); 
 

  useEffect(() => {
    const element = document.getElementById('box');
    if (element) {
      element.addEventListener('mousemove', (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        setLinePosition({ x: event.clientX, y: event.clientY });
        setLineOpacity(1);
      });
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', (event) => {});
      }
    };
  }, []);

  

  return (
    <div className="container">
      <p className="header">React hook useEffect example!</p>
     
      <div id="box" className="box-container">
        <p className="text">Ваша позиция: {mousePosition.x}, {mousePosition.y}</p>
        <div id="line" className="line" style={{ left: linePosition.x, top: linePosition.y, opacity: lineOpacity }}></div>
       
      </div>
    </div>
  );
}

export default App; 
