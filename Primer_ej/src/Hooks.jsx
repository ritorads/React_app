import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'; // Importación corregida
import TTT from './Tic_Tac_Toe.jsx';
import './styles.css';

/*funciones*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*renderizar componentes*/
const App = () => {
  const [numero, setNumero] = useState(0);
  const [pagina, setPagina] = useState('home'); // Estado para controlar la página actual

  const aumento = () => {
    setNumero(numero + 1);
  }

  const alerta2 = () => {
    setNumero(0);
  }

  const decremento = () => {
    setNumero(numero - 1);
  }

  const pagina2 = () => {
    setPagina('TTT');
  }

  /*componentes*/
  const Button = ({ text, onClick }) => {
    return (
      <button onClick={onClick}>
        <img width="48" height="48" src="https://img.icons8.com/doodle/48/facebook-like.png" alt="facebook-like" />
        {text}
      </button>
    );
  }

  return (
    <React.Fragment>
      {pagina === 'home' && (
        <>
          <h1>Al presionar el botón se generará uno diferente</h1>
          <p>{numero}</p>
          <Button text={"Aumento"} onClick={aumento} />
          <Button text={"Reset"} onClick={alerta2} />
          <Button text={"Decremento"} onClick={decremento} />
          <Button text={"Next"} onClick={pagina2} />
        </>
      )}
      {pagina === 'TTT' && (
        <TTT />
      )}
    </React.Fragment>
  );
}

root.render(<App />);
```render solo en la página de inicio```
