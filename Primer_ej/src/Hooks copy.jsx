import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

/*funciones*/
const root = ReactDOM.createRoot(document.getElementById('root'));



/*renderizar componentes*/
const App = () => {
  const [numero, setNumero] = useState(0);

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
    root.render(<App2 />);
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
      <h1>Al presionar el botón se generá uno diferente</h1>
      <p>{numero}</p>
      <Button text={"Aumento"} onClick={() => aumento} />
      <Button text={"Reset"} onClick={() => alerta2} />
      <Button text={"Decremento"} onClick={() => decremento} />

      <Button text={"Pagina 2"} onClick={() => pagina2} />

      
    </React.Fragment>
  );
}

/*App2 abre tic_tac_toe*/
const App2 = () => {
  return (
    <React.Fragment>
      <h1>Al presionar el botón se generá uno diferente</h1>
      <p>hola</p>
    </React.Fragment>
  );
}
root.render(<App />);
