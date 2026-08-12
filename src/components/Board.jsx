
import React, { useState } from 'react'
import Square from './Square'
import CalculateWinner from './CalculateWinner';

export default function Board() {

  const [xIsNext, SetXIsNext] = useState (true);

  const [squares, setSquares] = useState (Array (9).fill(null));

   function handleClick (i) {

        if(CalculateWinner(squares) || squares[i]){
          return;
        }

          const nextSquares = squares.slice();
          if (xIsNext) {
            nextSquares[i] = 'X';

          }  else {
            nextSquares[i] = 'O';
          }

          setSquares(nextSquares);
          SetXIsNext(!xIsNext);
   }

   function handleRestart(){
     setSquares(Array(9).fill(null))
     SetXIsNext(true)
   }


   const winner = CalculateWinner(squares);
   const isDraw = !winner && squares.every(square => square !==null)
   let status;
   if (winner){
    status = 'Winner:' + winner; 
   } else if(isDraw){
    status='DRAW'

   }else {
    status = 'Next player:' + (xIsNext ? 'X' : 'O');
   }


  return (
    <div className='board-container'>


      <div className='status'>{status}</div>

        <div className='board-row'>
          <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/> 
          <Square  value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square  value={squares[2]} onSquareClick={() => handleClick(2)}/>           
        </div>

       

        <div className='board-row'>
           <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
           <Square value={squares[4]} onSquareClick={() => handleClick (4)}/>
           <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>

        
        <div className='board-row'>
           <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
           <Square value={squares[7]} onSquareClick={() => handleClick (7)}/>
           <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>

        <button className='restart-button' onClick={handleRestart}>
          Restart Game 

        </button>

    </div>
  )
}

