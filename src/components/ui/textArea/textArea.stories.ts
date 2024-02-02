import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '@/components/ui/textArea/textArea'
import { TextField } from '@/components/ui/textField/textField'

import s from './textArea.module.scss'

const meta: Meta<typeof TextArea> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/UI/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    className: s.storyBook,
    label: 'TextArea',
  },
}
export const DefaultWithValue: Story = {
  args: {
    className: s.storyBook,
    label: 'TextArea',
    value:
      'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.',
  },
}
export const Disabled: Story = {
  args: {
    className: s.storyBook,
    disabled: true,
    label: 'TextArea',
    value: 'TextArea',
  },
}
