import React from 'react'
import AnswersItem from './AnswersItem/AnswersItem'

const AnswersList = props => {
  return (
    <ul className="list-group list-group-flush ml-3 mr-3">
      { props.answers.map((answer, index) => {
        return (
          <AnswersItem
            key={index}
            keyAnswer={index}
            answer={answer}
            activeAnswer={props.activeAnswer}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList