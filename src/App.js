import './App.css'
import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameResult from './components/GameResult'
import {
  Container,
  CourseBoard,
  Div,
  Heading,
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
    opponentChoice: '',
    ourChoiceMade: '',
  }

  ourChoice = id => {
    this.setState({opponentChoice: '', ourChoiceMade: ''})
    const result = Math.floor(Math.random() * 3)
    const opponentImg = choicesList[result].imageUrl
    // console.log(result)
    // console.log(id)

    const url = choicesList.find(each => each.id === id)
    const ourChoiceImg = url.imageUrl
    // console.log(url.imageUrl)
    this.setState({
      opponentChoice: opponentImg,
      ourChoiceMade: ourChoiceImg,
      gameStart: true,
    })
    if (opponentImg === ourChoiceImg) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {score, opponentChoice, ourChoiceMade, gameStart} = this.state
    console.log(opponentChoice)
    console.log(ourChoiceMade)
    return (
      <Container>
        <WrapBody>
          <CourseBoard>
            <Div>
              <Heading>ROCK</Heading>
              <Heading>PAPER</Heading>
              <Heading>SCISSORS</Heading>
            </Div>
            <ScoreContainer>
              <ScoreH1>Score</ScoreH1>
              <Score>{score}</Score>
            </ScoreContainer>
          </CourseBoard>
        </WrapBody>
        {gameStart ? (
          <GameResult
            opponentChoice={opponentChoice}
            ourChoiceMade={ourChoiceMade}
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
