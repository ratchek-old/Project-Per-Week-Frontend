import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';


const Square=(props)=>{ 
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

const Board = (props) => { 
    const renderSquare = (i) => {
        return (
            <Square 
                value={props.squares[i]} 
                onClick={ () => props.handleClick(i)} 
            />
        )
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>    
        </div>    
    )
}

const Game= () => { 
    
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState(Array(Array(9).fill(null)));
    const [stepNumber, setStepNumber] = useState(0);

    function handleClick(i) {        
        const hist = history.slice(0, stepNumber+1);
        console.log(hist)
        setHistory(hist);
        console.log("in handleClick - log 1 - history size = "+ history.length)

        const currentBoard = [...history[stepNumber]];
        const winner = calculateWinner(currentBoard);
        
        if (winner || currentBoard[i]) return;
        currentBoard[i] = xIsNext ? "X" : "O";
        setHistory(hist.concat([currentBoard]));
        setStepNumber (stepNumber + 1)
        setXIsNext(!xIsNext);

    }

    function jumpTo(move) {
        setXIsNext(move % 2 === 0)
        setStepNumber(move)
    }
    


    const currentBoard = [...history[stepNumber]];
    const winner = calculateWinner(currentBoard);

    const moves = history.map((step, move) => {
        const description = move ?
            ' Go to move #' + move :
            ' Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)} > {description} </button>
            </li>
        );
    })

    let status;
    if (winner) {
        status = winner + " WON !!!!";
    }
    else {
        status = 'Next player: ' + (xIsNext ? "X" : "O");
    }




    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares = {currentBoard} 
                    handleClick={handleClick}
                />
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  