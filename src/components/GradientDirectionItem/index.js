// Write your code here
import {ButtonContainer, ListType} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetail, onChangeDirection, isActive} = props
  const {value, displayText} = directionDetail

  const onSelectDirection = () => {
    onChangeDirection(value)
  }

  return (
    <ListType>
      <ButtonContainer
        type="button"
        onClick={onSelectDirection}
        isActive={isActive}
      >
        {displayText}
      </ButtonContainer>
    </ListType>
  )
}

export default GradientDirectionItem
