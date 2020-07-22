import React from 'react'
import Button from '../UI/Button/Button'

const ResultQuiz = props => {
  return (
    <>
      <div className="card-body mt-n3">
        <hr/>
        <h4 className="card-text font-weight-bold mt-5 mb-2 text-center">Ваш результат</h4>
        <p className="card-text text-center display-2 font-weight-lighter">{ (props.correctAnswers / props.quizLength) * 100 }%</p>
        <p className="text-center text-black-50">Ви дали {props.correctAnswers}/{props.quizLength} правильних відповіді</p>
        <hr className="mt-5"/>
      </div>
      <div className="card-body d-flex justify-content-center align-items-center mb-3 mt-n3">
        <Button
          classButton="btn btn-dark"
          typeButton="button"
          onClick={props.onRetry}
          disabled={props.isDisabledButton}
        >
          Пройти ще раз
        </Button>
      </div>
    </>
  )
}

export default ResultQuiz