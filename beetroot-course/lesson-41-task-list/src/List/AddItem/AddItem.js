import React from 'react'
import classes from './AddItem.scss'

const AddItem = props => {
  return (
    <div className={classes.AddItem}>
      <input
        onChange={props.onChangeInput}
        onKeyPress={props.onAddItem}
        type="text"
        value={props.inputValue}
        placeholder="Your item"
      />
      <button onClick={props.onAddItem}>Add</button>
    </div>
  )
}

export default AddItem