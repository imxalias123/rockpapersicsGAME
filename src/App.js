import './App.css'
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
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
  List,
  Button,
  Img,
  PopButton,
  PopupContainer,
  DivPopup,
  PopupImg,
  CloseButton,
} from './styledComponents'

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
    opponentChoice: '',
  }

  onChoice = () => {
    this.setState({opponentChoice: ''})
    const result = Math.floor(Math.random() * 3)
    this.setState({opponentChoice: choicesList[result].imageUrl})
  }

  render() {
    const {score, opponentChoice} = this.state
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
          <WrapImages>
            {choicesList.map(eachImage => (
              <List key={eachImage.id}>
                <Button type="button" onClick={this.onChoice}>
                  <Img src={eachImage.imageUrl} alt={eachImage.id} />
                </Button>
              </List>
            ))}
          </WrapImages>
        </WrapBody>

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
