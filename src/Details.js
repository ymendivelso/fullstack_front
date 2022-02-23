import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';



const Detail = ({ jugador }) => {
    // console.log(jugador);
    const [player, setPlayer] = useState(null);
      
    useEffect(
        () => {
            fetch(`http://localhost:3001/api/v1/players?search=${jugador}&order=asc&page=1`)
                .then(res => res.json())
                .then(result => {
                    // console.log(result);
                    setPlayer(result);
                });
            },
        [jugador]
    );

    if (jugador != ""){
        return (
            player && (
                <div className="content_details">
                    <img className="img_player" src="https://consejosjuegospro.com/wp-content/uploads/2021/02/1613767587_174_Centro-Icon-Moments-de-FIFA-21-fechas-de-lanzamiento-calificaciones.png"></img>
                    <div>
                        <p>Nombre : {player.players[0].nombre}</p>
                        <p>Posición : {player.players[0].posicion}</p>
                        <p>Nacionalidad : {player.players[0].nacionalidad}</p>
                        <p>Equipo: {player.players[0].equipo}</p>
                    </div>               
                </div>
            )
        );
    } else {
        return (
        <div></div>
            );
    }
    
  }


export default hot(Detail);