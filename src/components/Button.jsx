import React from "react";
import '../styles/Button.css';

function Button(props) {
  // Identify each button with his children value in App.js
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }
  return (
    // Changing class if children are operators.
    // Managin an event listener (onClic) with an anonymus function 'manageClic' with 'children' as props.
    <button className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`} onClick={() => props.manageClic(props.children)}>
      {props.children}
    </button>
  );
}

export default Button;