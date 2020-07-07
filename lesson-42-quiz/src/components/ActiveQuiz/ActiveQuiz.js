import React from 'react'
import AnswersList from './AnswersList/AnswersList'
import Button from '../UI/Button/Button'

const ActiveQuiz = props => {
  return (
    <form onSubmit={props.nextQuestion}>
      <div className="card-body">
        <p className="card-text font-weight-bold mb-1">Запитання №{props.activeQuestion}</p>
        <p className="card-text">{props.question.question}</p>
      </div>

      <AnswersList
        answers={props.answers}
        activeAnswer={props.activeAnswer}
      />
      
      <div className="card-body d-flex justify-content-end align-items-center mb-1">
          <div className="mr-3">{props.activeQuestion}/{props.quizLength}</div>
          <Button
            classButton="btn btn-dark"
            typeButton="submit"
            disabled={props.isDisabledButton}
          >
            Продовжити
          </Button>
      </div>
    </form>
  )
}

export default ActiveQuiz