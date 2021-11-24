import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import Image from '../Image'
import * as S from './Avatar.styles'

import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { sizes } from 'styles/tokens/sizes'
import { REGEX_RULES } from 'core/utils/constants'

export interface IAvatar extends IGeneralProps {
  /**
   * Image Source for avatar
   */
  src?: string
  /**
   * ICon element for render
   */
  icon?: React.ReactNode
  /**
   * Text for render on avatar
   */
  text?: string
  /**
   * Dynamic background
   */
  background?: string
}

const Avatar = ({
  src,
  icon,
  text,
  background = 'rgb(97, 104, 106)',
  ...genericsProps
}: IAvatar) => {
  const showOnlyFirstLettersOnText = (text: string): string => {
    const firstLettersCaptured: string[] | null = text.match(
      REGEX_RULES.CATCH_FIRST_LETTERS
    )
    const joinFirstLetters = firstLettersCaptured?.join('') || ''

    return joinFirstLetters
  }

  const renderContent = (): React.ReactNode => {
    if (icon) return icon
    if (text) return showOnlyFirstLettersOnText(text)
    if (src)
      return (
        <Image
          width={sizes.avatar.width}
          height={sizes.avatar.height}
          src={src}
          alt="Avatar"
        />
      )
    return null
  }

  return (
    <S.Avatar $background={background} {...getGenericPropStyles(genericsProps)}>
      {renderContent()}
    </S.Avatar>
  )
}

export default Avatar