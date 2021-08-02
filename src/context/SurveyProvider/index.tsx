import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS,
  SET_CURRENT_QUESTION,
  SET_PERCENT,
  SET_SURVEY_OPTION_SELECTED,
  SET_TOTAL_QUESTIONS,
} from './types'

interface ISetOptionSelected {
  questionId: string
  response: any
}

const SurveyProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    totalQuestions: 0,
    answers: null,
    callbacks: null,
    percent: 0,
    currentQuestion: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setTotalQuestions = (data: any) => {
    dispatch({
      type: SET_TOTAL_QUESTIONS,
      payload: data,
    })
  }

  const setPercent = (data: any) => {
    dispatch({
      type: SET_PERCENT,
      payload: data,
    })
  }

  const setCurrentQuesion = (data: any) => {
    dispatch({
      type: SET_CURRENT_QUESTION,
      payload: data,
    })
  }

  const setSurveyOptionSelected = (data: ISetOptionSelected) => {
    dispatch({
      type: SET_SURVEY_OPTION_SELECTED,
      payload: data,
    })
  }

  const setCallbacks = (data: any) => {
    dispatch({
      type: SET_CALLBACKS,
      payload: data,
    })
  }

  const onClickSubmit = (values: any) => {
    if (state.callbacks) {
      state.callbacks?.onFinish(values)
    }
  }

  return (
    <context.Provider
      value={{
        totalQuestions: state.totalQuestions,
        answers: state.answers,
        percent: state.percent,
        currentQuestion: state.currentQuestion,
        setPercent,
        setSurveyOptionSelected,
        setCallbacks,
        setTotalQuestions,
        onClickSubmit,
        setCurrentQuesion,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default SurveyProvider
