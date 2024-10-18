import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(0));
  const [isXNext, setIsXNext] = useState(true);

  const Change_value_square = (index) => {
    if (squares[index]) return; // Evita sobreescribir
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O'; // Alterna entre 'X' y 'O'
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const Square = ({ value, onClick }) => (
    <div onClick={onClick} className="squares">
      {value || '-'}
    </div>
  );

  Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  const Button = ({ text, onClick }) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    );
  };

  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onClick={() => Change_value_square(i)} />
  );

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
      [0, 4, 8], [2, 4, 6], // Diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
    
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          alert(`Ganador: ${squares[a]}`);
          return {
            player: squares[a],
            line: [a, b, c],
          };

        }
      }
    
      return null;
    };

  return (
    <React.Fragment>
      <h1>Solo un Tic Tac Toe</h1>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, i) => renderSquare(i))}
      </div>

      <Button text="Reset" onClick={() => setSquares(Array(9).fill(0))} />
      <Button text="Verificar" onClick={() => calculateWinner(squares)} />
      <Button text="Next" onClick={() => setSquares(Array(9).fill(0))} />

      <p>{squares.join('')}</p>
      
    </React.Fragment>
  );
};

export default App;
