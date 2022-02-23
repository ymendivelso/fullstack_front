import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root';
import List from "./List";
const axios = require('axios');
import Detail from "./Details";

const OptionsTeams = ({ data }) => {

    const ChangeTeam = (e)=>{            
        // console.log(e.target.value);       

        ReactDOM.render(<List team={e.target.value} />, document.getElementById("app"));
        ReactDOM.render(<Detail jugador="" />, document.getElementById("details"));
    };

    let team_list = data.map( (e,i) => {     
        return (
            <option key={i} value={e.equipo}>{e.equipo}</option>
        );
    });

    return (
        <select className="search" onChange={ChangeTeam}>
            <option value="">Seleccione un equipo</option> 
            {team_list}
        </select>
    );

}


const Search = ({ name , page }) =>  {
    const [teams, setTeams] = useState(null);
  
    useEffect(
      () => {
        axios.post('http://localhost:3001/api/v1/team',{Name: `${name}`, Page: `${page}`})
            .then(res => res.data)
            .then(result => {
                // console.log(result);
                setTeams(result);
            });
      },
      [name,page]
    );
  
    return (
        teams && (
        <div className="content_search">
            <OptionsTeams data={teams.players}/>
        </div>
      )
    );
}

export default hot(Search);