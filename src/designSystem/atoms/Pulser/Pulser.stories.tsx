import React from 'react'

import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Pulse from '.'

export default {
  title: 'Atoms/Pulse',
  component: Pulse,
  args: {},
  argTypes: {
    borderColor: { control: 'color' },
    isBloqued: { control: 'boolean' },
    isActive: { control: 'boolean' },
    ...stylesControl,
  },
} as Meta

export const Basic = (args: any) => {
  return (
    <Pulse {...args}>
      <img
        width="50px"
        height="50px"
        src="https://i.ibb.co/MVLDD4K/angular.png"
        alt="roundLogo"
      />
    </Pulse>
  )
}

Basic.args = {
  borderColor: '#e0522d',
}

export const Active = (args: any) => {
  return (
    <Pulse {...args}>
      <img
        width="50px"
        height="50px"
        src="https://i.ibb.co/MVLDD4K/angular.png"
        alt="roundLogo"
      />
    </Pulse>
  )
}

Active.args = {
  borderColor: '#e0522d',
  isActive: true,
}

export const Bloqued = (args: any) => {
  return (
    <Pulse {...args}>
      <img
        width="50px"
        height="50px"
        src="https://i.ibb.co/MVLDD4K/angular.png"
        alt="roundLogo"
      />
    </Pulse>
  )
}

Bloqued.args = {
  borderColor: '#e0522d',
  isBloqued: true,
}
