// Style your elements here
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 8px;
  border-radius: 8px;
  margin-right: 5px;
  width: 60px;
  background-color: ${props => (props.isActive ? '#ffffff' : '#334155')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`

export const ListType = styled.li`
  list-style: none;
`
