import React from 'react'

const Button = props => {
  return (
    <button
      type={props.typeButton}
      onClick={props.onClick}
      className={props.classButton}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button