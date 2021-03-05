import React from "react";
import PropTypes from "prop-types";

//create your first component
export function SecondsCounter(props) {


    let counter = 0;
    setInterval(function () {
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter / 1);
        counter++;
    }, 1000);

    SecondsCounter.propTypes = {
        digitFour: PropTypes.number,
        digitThree: PropTypes.number,
        digitTwo: PropTypes.number,
        digitOne: PropTypes.number
    };

    digitOne = one;
    digitTwo = two;
    digitThree = three;
    digitFour = four;

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}


