import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const NewPlayer = (props) => {
    const [playerName, setPlayerName] = useState('');
    const [position, setPosition]= useState('');
    const [errs, setErrs] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            playerName,
            position})
        .then(res => {
            if(res.data.errors) {
                setErrs(res.data.errors);
            } else {navigate("/players")}
        }) 
        .catch(err=>console.log(err));
    };

    return (
        <form onSubmit= {onSubmitHandler}>
            <p>
                <label>Player Name:</label>
                {errs.playerName ? 
                    <p style= {{color: 'red'}}> {errs.playerName.message}</p>:
                    null
                    }
                <input type= "text"
                    value= {playerName}
                    onChange= {(e)=> setPlayerName(e.target.value)} />
            </p>
            <p>
                <label>Position:</label>
                {errs.position ? 
                    <p style= {{color: 'red'}}> {errs.position.message}</p>:
                    null
                    }
                <input type= "text"
                    value= {position}
                    onChange= {(e)=> setPosition(e.target.value)} />
            </p>
            <button type= "submit">Submit</button>
        </form>
    )


};

export default NewPlayer;