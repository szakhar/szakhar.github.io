import React from 'react'

const AnswersItem = props => {
  return (
    <li className="list-group-item pl-3">
        <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="answer"
              id={props.answer}
              onChange={() => props.activeAnswer(props.keyAnswer)}
              value={props.answer}
            />
            <label className="form-check-label" htmlFor={props.answer}>
              {props.answer}
            </label>
        </div>
    </li>
  )
}

export default AnswersItem