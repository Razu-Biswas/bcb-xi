import React from 'react';
import './PlayersCart.css';

const PlayersCart = (props) => {

    return (
        <div className="summary-area">
            <h3 className="all-summary">All Budget Summary</h3>
            <div>
                {
                    props.playersCart.map((added) => (
                        <div className="summary">
                            <h6>Name: {added.name}</h6>
                            <h6>Salary: $ {added.salary}</h6>
                        </div>))
                }

            </div>

            {
                <div className="total-budget">
                    <h4>Total Players: {props.playersCart.length} </h4>
                    <h3>Total Cost: $ {props.playersCart.reduce((total, salary) => total + salary.salary, 0)}</h3>
                </div>
            }

        </div>
    );
};

export default PlayersCart;