import React from 'react'
import TextArea from 'designSystem/atoms/TextArea'
import { THandleChangeOption } from './Options'

export interface ITextAreaToWrite {
  answer: string
  placeholder?: string
  onChangeOption?: THandleChangeOption
}

const TextAreaToWrite = ({
  answer,
  placeholder,
  onChangeOption,
}: ITextAreaToWrite) => {
  return (
    <TextArea
      value={answer}
      placeholder={placeholder}
      width="full"
      heigth="md"
      border="md"
      onChangeFormItem={onChangeOption}
    />
  )
}

export default TextAreaToWrite