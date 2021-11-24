import React, { Fragment } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { ButtonType } from 'core/domain/types'
import * as S from './Button.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import Spacer from 'designSystem/layouts/Spacer'

export type TButton = 'button' | 'reset' | 'submit'

export interface IButton extends IGeneralProps {
  /**
   * Content Button to show
   */
  children: React.ReactNode
  /**
   * Button Variant
   */
  variant?: ButtonType
  /**
   * Button Preffix
   */
  preffix?: React.ReactNode
  /**
   * Button Type Action
   */
  type?: TButton
}

const Button = ({
  children,
  variant = 'primary',
  preffix,
  type = 'button',
  ...genericsProps
}: IButton) => {
  return (
    <S.Button
      {...getGenericPropStyles(genericsProps)}
      $variant={variant}
      type={type}
    >
      {preffix && (
        <Fragment>
          {preffix}
          <Spacer direction="right" />
        </Fragment>
      )}
      {children}
    </S.Button>
  )
}

export default Button