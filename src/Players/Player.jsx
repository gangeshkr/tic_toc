import React, {useState} from 'react'

function Player({handleClickForm}) {
    
    const [ player, setPlayer] = useState('')
    const [ player1, setPlayer1] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const playerData = { player, player1 };
        handleClickForm(playerData);
    }

  return (
    <div>
        <form className='form' onSubmit={handleSubmitForm}>
            <span>Please add the name for Player 1 </span>
            <input className='input' type="text" value={player} placeholder="Enter name for player 1" onChange={(e) => setPlayer(e.target.value)} />
            <span>Please add the name for Player 2 </span>
            <input className='input' type="text" value={player1} placeholder="Enter name for player 2" onChange={(e) => setPlayer1(e.target.value)} />
            <button className='btn' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Player