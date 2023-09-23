import {
  PlayContainer,
  Div,
  Para,
  Img,
  GameResultContainer,
  GameText,
  GameResultHeading,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {ourChoiceMade, opponentChoice, gameWon, playAgainGame} = props
  const playAgain = () => {
    playAgainGame()
  }

  return (
    <GameResultContainer>
      <PlayContainer>
        <Div>
          <Para>YOU</Para>
          <Img src={`${ourChoiceMade}`} alt="your choice" />
        </Div>
        <Div>
          <Para>OPPONENT</Para>
          <Img src={`${opponentChoice}`} alt="opponent choice" />
        </Div>
      </PlayContainer>
      {gameWon ? (
        <GameText>
          <GameResultHeading> YOU LOSE</GameResultHeading>
          <PlayAgainButton type="button" onClick={playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameText>
      ) : (
        <GameText>
          <GameResultHeading>YOU WON</GameResultHeading>
          <PlayAgainButton type="button" onClick={playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameText>
      )}
    </GameResultContainer>
  )
}
export default GameResult
