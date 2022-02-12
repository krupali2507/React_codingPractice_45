// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadingContent = styled.h1`
  color: #ffffff;
`
export const TitleContent = styled.p`
  color: #ffffff;
  font-size: 20px;
`
export const ULContainer = styled.ul`
  list-style: none;
  display: flex;
`

export const ColorPickerContainer = styled.div`
  min-width: 40%;
  display: flex;
  justify-content: space-between;
`

export const ColorName = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const ColorPicker = styled.input``

export const GenerateButton = styled.button`
  border-radius: 8px;
  background-color: #00c9b7;
  padding: 10px;
`
