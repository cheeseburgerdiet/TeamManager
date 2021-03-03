import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllPlayers = (props) => {
    const [playerList, setPlayerList] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8000/api/players')
            .then(res =>{
                console.log(res.data);
                setPlayerList(res.data);
            })
            .catch(err => console.log('problem with AllPlayers.js', err));
    }, []);

        
    const deletePlayer = (playerId) => {
            axios.delete('http://localhost:8000/api/players/'+ playerId)
                .then((res)=> {
                    const deletedPlayer = res.data;
                    console.log(deletedPlayer);
                    const filteredPlayerArray= playerList.filter((player) => player._id !== playerId);
                    setPlayerList(filteredPlayerArray);
                })
                .catch(err => console.log(err));
        }

        const tableStyle = {
            border: "solid black 3px",
            textAlign: "center",
            margin: "auto",
            marginTop: "15px"
        }
    
    return(
        <div>
            <h1>Players</h1>
            <button onClick= {()=> navigate('/players/new')}>Add Player</button>
            <table style = {tableStyle}>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { playerList.map((player, i) => (
                        <tr key = {i}>
                            <td> {player.playerName} </td>
                            <td> {player.position}</td>
                            <td>
                                <button
                                    onClick= {()=> deletePlayer(player._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

};

export default AllPlayers;