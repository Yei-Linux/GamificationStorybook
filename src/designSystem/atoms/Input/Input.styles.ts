import styled from '@emotion/styled'
import {
  inputBasicStyle,
  inputGeneralStyle,
} from '../../../styles/utilities/input'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const InputWrapper = styled.div<{
  positionPrefix?: string
  border?: string
  shadow?: string
  width?: string
  heigth?: string
  textAlign?: string
  fontWeight?: string
}>`
  display: flex;
  align-items: center;
  overflow: hidden;

  flex-direction: ${(props) =>
    props.positionPrefix == 'left' ? 'row' : 'row-reverse'};
  input {
    border: none;
  }
  padding: ${(props) =>
    props.positionPrefix == 'left' ? '0 0 0 1rem' : '0 1rem 0 0'};

  ${inputGeneralStyle()};
  ${(props: any) => twinStyles(props)};
`

export const InputContainer = styled.input<{
  hasIcon?: boolean
  border?: string
  shadow?: string
  width?: string
  heigth?: string
  textAlign?: string
  fontWeight?: string
}>`
  ${inputBasicStyle()};
  ${(props: any) => !props.hasIcon && inputGeneralStyle()};
  ${(props: any) =>
    !props.hasIcon
      ? twinStyles(props)
      : twinStyles({ fontWeight: props.fontWeight })};
`