import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData.json';
import PlayersCart from '../PlayersCart/PlayersCart.js';
import PlayersInfo from '../PlayersInfo/PlayersInfo.js';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(FakeData)
    }, []);

    const [added, setAdded] = useState([]);
    const addedPlayer = (add) => {
        const checking = added.filter((check) => check.id === add.id)
        if (checking.length === 0) {
            setAdded([...added, add])
        }
        else {
            alert("Selected Player, Please select next Player")
        }
    }

    return (
        <div className="players-info">
           
            <div className="players">
                {
                    players.map((player) => <PlayersInfo player={player} add={addedPlayer}></PlayersInfo>)
                }
            </div>

            <div className="summary-area">
                {
                    <PlayersCart playersCart={added}></PlayersCart>
                }
            </div>

        </div>
    );
};

export default Players;