import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clica() {
  const numero = () => {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
    }
    alert(i);
  }

  return (
    <button onClick={numero}>Carrega 1 número</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clica />);