import {List, Button, Img} from './styledComponents'

const GamesImages = props => {
  const {details, ourChoice} = props
  const {imageUrl, id} = details

  const onChoice = () => {
    ourChoice(id)
  }

  return (
    <div>
      <List>
        <Button type="button" onClick={onChoice}>
          <Img src={imageUrl} alt={id} />
        </Button>
      </List>
    </div>
  )
}

export default GamesImages
