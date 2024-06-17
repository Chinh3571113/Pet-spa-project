import React, { useState } from 'react'

export default function ContentPre({playerDataOfMain}) {
  const [player, setPlayer] = useState(0);
  return (
    <div className='container' >
        {playerDataOfMain.map((player) => (
            <div className='column' key={player.id} >
                <div className='card'>
                    <img src={player.img} alt='' />
                    <h3>{player.name}</h3>
                    <p className='title' ></p>
                    <p><button onClick={() => {setPlayer(player)} } ><a href='#popup1' id='opdenPopup' >Detail</a></button></p>
                </div>
            </div>
        ))}
        <div id='popup1' className='overlay' >
            <div className='popup' >
                <img src={player.img}/>
                <h2>{player.name}</h2>
                <a className='close' href='#' >&times;</a>
                <div className='content' >
                    {player.info}
                </div>
            </div>
        </div>
    </div>
  )
}
