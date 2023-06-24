//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SimpleCounter(props){
    return (<div className="BigCounterContainer">
        <div></div>
        <div className="Clock">
        <FontAwesomeIcon icon={faClock} />
            </div>
        <div className="HundredThousands">6</div>
        <div className="TenThousands">5</div>
        <div className="Thousands">4</div>
        <div className="Hundreds">3</div>
        <div className="Tenths">2</div>
        <div className="Units">1</div>
        </div>)
}


//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
