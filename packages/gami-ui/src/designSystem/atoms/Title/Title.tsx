import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Title.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'

export interface ITitle extends IGeneralProps {
  /**
   * Tag Title
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * Title Text Content
   */
  children: React.ReactNode
}

const Title = ({ level = 'h1', children, ...genericsProps }: ITitle) => {
  return (
    <S.Title as={level} {...getGenericPropStyles(genericsProps)}>
      {children}
    </S.Title>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  heigth: 'auto',
}

export default withDefaults(Title, defaultProps)
