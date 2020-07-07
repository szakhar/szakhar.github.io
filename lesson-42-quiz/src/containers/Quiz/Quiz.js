import React from 'react'
// import data from '../../data/Questions.json'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import ResultQuiz from '../../components/ResultQuiz/ResultQuiz'
import InfoMessage from '../../components/UI/InfoMessage/InfoMessage'

class Quiz extends React.Component {

  state = {
    isFinished: false,
    activeQuestion: 1,
    correctAnswers: 0,
    activeAnswer: 0,
    isDisabledButton: true
  }


  // Load json from API
  componentDidMount() {
    fetch("data/Questions.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            data: Object.values(result)
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }


  nextQuestionHandler = event => {
    event.preventDefault();

    const correctAnswer = this.state.data[this.state.activeQuestion - 1].correct_answers[0]

    if (correctAnswer === event.target.answer.value) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1
      })
    }

    if (this.state.activeQuestion < Object.keys(this.state.items).length) {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1
      })
    } else {
      this.setState({
        isFinished: true
      })
    }

    // Reset checkbox checket
    event.target.answer[this.state.activeAnswer].checked = false

    // Disabled Button
    this.setState({isDisabledButton: true})
  }


  // Active Answer Key
  onActiveAnswerHandler = key => {
    this.setState({
      activeAnswer: key,
      isDisabledButton: false
    })
  }


  onRetryHandler = () => {
    this.setState({
      isFinished: false,
      activeQuestion: 1,
      correctAnswers: 0,
      activeAnswer: 0,
      isDisabledButton: true
    })
  }


  render() {
    const { error, isLoaded, items } = this.state

    if (error) {
      return (
        <InfoMessage
          message="Помилка: "
          error={error.message}
        />
      )
    } else if (!isLoaded) {
      return (
        <InfoMessage
          message="Завантаження..."
        />
      )
    } else {
      return (
        <div className="row">
          <div className="card col-11 col-lg-7 col-md-10 col-sm-12 col-xs-12 mx-auto pl-2 pr-2 mb-5" style={{width: '18rem', marginTop: '60px'}}>
              <div className="card-body">
                <h1 className="card-title font-weight-bold mt-2 mb-n3">Наскільки ти кіберспортивний експерт</h1>
              </div>
              
              {
                this.state.isFinished
                  ? <ResultQuiz
                      correctAnswers={this.state.correctAnswers}
                      quizLength={Object.keys(items).length}
                      onRetry={this.onRetryHandler}
                    />
                  : <ActiveQuiz
                      question={items['question_' + this.state.activeQuestion]}
                      answers={items['question_' + this.state.activeQuestion].answers}
                      activeQuestion={this.state.activeQuestion}
                      quizLength={Object.keys(items).length}
                      nextQuestion={this.nextQuestionHandler}
                      activeAnswer={this.onActiveAnswerHandler}
                      isDisabledButton={this.state.isDisabledButton}
                    />
              }
          </div>
        </div>
      )
    }
  }
}

export default Quiz