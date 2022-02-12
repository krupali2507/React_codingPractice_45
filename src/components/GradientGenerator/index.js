import {Component} from 'react'

import {
  BgContainer,
  HeadingContent,
  TitleContent,
  ULContainer,
  ColorPickerContainer,
  ColorPicker,
  ColorName,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323 , #014f7b`,
  }

  onChangeDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    const {activeDirection, color1, color2} = this.state

    this.setState({
      gradientValue: `to ${activeDirection}, ${color1} , ${color2}`,
    })
  }

  render() {
    const {activeDirection, color1, color2, gradientValue} = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <HeadingContent>Generate a CSS Color Gradient</HeadingContent>
        <TitleContent>Choose Direction</TitleContent>
        <ULContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionDetail={eachDirection}
              key={eachDirection.directionId}
              onChangeDirection={this.onChangeDirection}
              isActive={activeDirection === eachDirection.value}
            />
          ))}
        </ULContainer>
        <TitleContent>Pick the Colors</TitleContent>
        <ColorPickerContainer>
          <ColorName>{color1}</ColorName>
          <ColorName>{color2}</ColorName>
        </ColorPickerContainer>
        <ColorPickerContainer>
          <ColorPicker
            type="color"
            onChange={this.onChangeColor1}
            value={color1}
          />
          <ColorPicker
            type="color"
            onChange={this.onChangeColor2}
            value={color2}
          />
        </ColorPickerContainer>
        <GenerateButton onClick={this.onClickGenerate}>Generate</GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
