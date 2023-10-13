import React, { useState } from 'react';
import Player from '../Players/Player';
import Board from './Board';


function Box() {


    const [ next, setNext] = useState(true)
    const [ squares, setSquares ] = useState(Array(9).fill(null))
    
    const [ formSubmit, setFormSubmit] = useState(false)
    const [ playerData, setPlayerData ] = useState({player:'', player1:''})
    const {player, player1} = playerData


    function handleClick (i){
        if(squares[i] || Winner(squares)){
            return
        }
        const nextSquare = squares.slice()
        console.log(nextSquare)
        if(next){
            nextSquare[i] = "X"
        }else{
            nextSquare[i] = "O"
        }
        setSquares(nextSquare)
        setNext(!next)
    }

    const winner = Winner(squares);
    const boardFull = squares.every((square) => (square != null))
    let status;
    if (winner) {
      status = 'Winner: ' + (winner === 'X' ? player + '  jeet gya' : player1 + ' jeet gya');
    }else if( boardFull && !winner){
        status = 'Match Draw Bhailog'
    }
     else {
      status = 'Next player: ' + (next ? 'Chalo Bhai ' + player : 'Chalo bhai '+ player1);
    }

    const handleClickForm = (playerData) =>{
        setPlayerData(playerData)
        setFormSubmit(true)
    }


  return (
    <>
        { !formSubmit ?
         (
            <Player handleClickForm={handleClickForm}/>
         )
         : 
        (
            <div>
                <div className='status'><h2>{status}</h2></div> 
                <Board handleClick={handleClick} squares={squares}/>    
            </div>
        )}
    </>
  )
}

export default Box;

function Winner(squares){
    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8]
    ]
    for(let i = 0; i < patterns.length; i++){
        const [ a, b, c ] = patterns[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
    }
    }
    return null
}


