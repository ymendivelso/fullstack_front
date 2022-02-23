
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
const axios = require('axios');
import Detail from "./Details";
import ReactDOM from "react-dom";


const ListItems = ({ data }) => {

    const ChangePlayer = (e)=>{            
        // console.log(e.target.id);       
        ReactDOM.render(<Detail jugador={e.target.id} />, document.getElementById("details"));
    };

    let player_list = data.map( (e,i) => {     
        return (
            <li className="" key={i} onClick={ChangePlayer} id={e.nombre}>
                <img className="img_miniatura" src="https://consejosjuegospro.com/wp-content/uploads/2021/02/1613767587_174_Centro-Icon-Moments-de-FIFA-21-fechas-de-lanzamiento-calificaciones.png"></img>
                {`${e.nombre} ${e.posicion}`}
            </li>
        );
    });

    return (<ol className="player_list">{player_list}</ol>);

}

const List = ({ team }) => {
    
    const [players, setPlayers] = useState(null);
  
    // if (team == "todos") {
    //     useEffect(
    //         () => {
    //           fetch(`http://localhost:3001/api/v1/players?search=${team}&order=asc&page=1`)
    //             .then(res => res.json())
    //             .then(result => {
    //             //console.log(result);
    //               setPlayers(result);
    //             });
    //         },
    //         [team]
    //       );
    // } else {
        useEffect(
            () => {
              axios.post('http://localhost:3001/api/v1/team',{Name: `${team}`, Page: `${1}`})
                  .then(res => res.data)
                  .then(result => {
                    //   console.log(result);
                      setPlayers(result);
                  });
            },
            [team]
          );
    // }
    
    return (
        players && (
        <div>
            <ListItems data={players.players}/>
        </div>
      )
    );
}

export default hot(List);