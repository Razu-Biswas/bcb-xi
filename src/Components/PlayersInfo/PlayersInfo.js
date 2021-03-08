import React from 'react';
import './PlayersInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PlayersInfo = (props) => {
    const {name, salary, country, image, email, gender, phone} = props.player;
    return (
        <div className="player-details">
            <div>
                <img src={image} alt="..." />
            </div>
            <div>
                <h5> {name}</h5>
                <h6>{gender}</h6>
                <p> <FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                <p>{phone}</p>
                <h6> {country} </h6>
                <h6> $ {salary}</h6>
                {/* use fontawesome button icon (for extra bonus marks) */}
                <button
                    className="button"

                    onClick={() => props.add(props.player)}
                >
                    <FontAwesomeIcon icon={faUserPlus} />  ADD

                   </button>
            </div>
        </div>
    );
};

export default PlayersInfo;