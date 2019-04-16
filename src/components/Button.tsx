import React, { FunctionComponent } from 'react'
import { IButtonProps } from 'interfaces'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: #fff;
  background-color: ${({theme}) => theme.mainColor};
  padding: 5px 15px;
`
const Button: FunctionComponent<IButtonProps> = props => {
  return <StyledButton {...props} />
}

Button.defaultProps = {
  type: 'button',
}

export default Button