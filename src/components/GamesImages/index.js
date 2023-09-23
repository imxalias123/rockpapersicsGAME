import {List, Button, Img} from './styledComponents'

const GamesImages = props => {
  const {details, ourChoice} = props
  const {imageUrl, id} = details

  //  const lower = id.toLowercase()

  const onChoice = () => {
    ourChoice(id)
  }

  return (
    <>
      <List>
        <Button
          type="button"
          onClick={onChoice}
          data-testid={`${id.toLowerCase()}Button`}
        >
          <Img src={imageUrl} alt={id} />
        </Button>
      </List>
    </>
  )
}

export default GamesImages
