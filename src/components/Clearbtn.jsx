import React from "react";
import '../styles/Clearbtn.css';

const Clearbtn = (props) => (
    // Event listener 'onClick' defined with children props
    <div className="clear-btn" onClick={props.manageClear}>
        {props.children}
    </div>
);

export default Clearbtn;