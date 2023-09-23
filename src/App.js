import './App.css'
import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameResult from './components/GameResult'
import {
  Container,
  CourseBoard,
  Heading,
  Div,
  ScoreContainer,
  ScoreH1,
  WrapBody,
  Score,
  WrapImages,
  PopButton,
  PopupContainer,
  DivPopup,
  PopupImg,
  CloseButton,
} from './styledComponents'

import GamesImages from './components/GamesImages'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    gameStart: false,
    gameResultText: '',
    opponentChoice: '',
    ourChoiceMade: '',
  }

  updatedResult = (ourChoiceId, opponentId) => {
    if (ourChoiceId === 'ROCK') {
      switch (opponentId) {
        case 'ROCK':
          return 'IT IS DRAW'
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return null
      }
    } else if (ourChoiceId === 'SCISSORS') {
      switch (opponentId) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'IT IS DRAW'
        case 'PAPER':
          return 'YOU WON'
        default:
          return null
      }
    } else {
      switch (opponentId) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'PAPER':
          return 'IT IS DRAW'
        default:
          return null
      }
    }
  }

  ourChoice = id => {
    const {score} = this.state
    const result = Math.floor(Math.random() * 3)
    //  const opponent = choicesList[result]
    const opponentImg = choicesList[result].imageUrl
    const opponentId = choicesList[result].id
    const url = choicesList.find(each => each.id === id)
    const ourChoiceImg = url.imageUrl
    const ourChoiceId = url.id

    const resultText = this.updatedResult(ourChoiceId, opponentId)

    let latestScore = score

    if (resultText === 'YOU WON') {
      latestScore = score + 1
    } else if (resultText === 'YOU LOSE') {
      latestScore = score - 1
    } else if (resultText === 'IT IS DRAW') {
      latestScore = score
    }
    this.setState({
      opponentChoice: opponentImg,
      ourChoiceMade: ourChoiceImg,
      gameStart: true,
      score: latestScore,
      gameResultText: resultText,
    })
  }

  playAgainGame = () => {
    this.setState({
      gameStart: false,
    })
  }

  render() {
    const {
      score,
      opponentChoice,
      ourChoiceMade,
      gameStart,
      gameResultText,
    } = this.state
    console.log(opponentChoice)
    console.log(ourChoiceMade)
    return (
      <Container>
        <WrapBody>
          <CourseBoard>
            <Heading>ROCK PAPER SCISSORS</Heading>

            <ScoreContainer>
              <ScoreH1>Score</ScoreH1>
              <Score>{score}</Score>
            </ScoreContainer>
          </CourseBoard>
        </WrapBody>
        <Div>
          {gameStart ? (
            <GameResult
              opponentChoice={opponentChoice}
              ourChoiceMade={ourChoiceMade}
              gameResultText={gameResultText}
              playAgainGame={this.playAgainGame}
            />
          ) : (
            <WrapImages>
              {choicesList.map(eachImage => (
                <GamesImages
                  key={eachImage.id}
                  details={eachImage}
                  ourChoice={this.ourChoice}
                />
              ))}
            </WrapImages>
          )}
        </Div>
        <PopupContainer>
          <Popup modal trigger={<PopButton type="button">Rules</PopButton>}>
            {close => (
              <DivPopup>
                <PopupImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </DivPopup>
            )}
          </Popup>
        </PopupContainer>
      </Container>
    )
  }
}

export default App
