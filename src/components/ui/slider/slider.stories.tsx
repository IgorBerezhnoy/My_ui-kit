import type { Meta, StoryObj } from '@storybook/react'

import s from './slider.module.scss'

import { Slider } from './'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>
const BigPhoto =
  'https://mir-cdn.behance.net/v1/rendition/project_modules/1400/16d64c112492929.601575c21f064.jpg'
const BigPhoto3 = 'https://i.pinimg.com/originals/57/0f/f4/570ff4390034b40db00e2ed5ce5ddcd0.jpg'
const BigPhoto4 =
  'https://cdn.dribbble.com/users/2246430/screenshots/9797393/real_estate_mockup_4x.jpg'
const Rectangle1 = 'https://i.pinimg.com/736x/07/96/b1/0796b1475ae29d7afbc42cd31ea1421b.jpg'
const Rectangle3 = 'https://i.pinimg.com/236x/1c/8e/11/1c8e118b714bede110bfd28323eb04d5.jpg'
const Rectangle4 = 'https://i.pinimg.com/236x/57/0f/f4/570ff4390034b40db00e2ed5ce5ddcd0.jpg?nii=t'

export const Default: Story = {
  args: {
    images: [
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle1} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle1} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto3} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle3} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto3} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle3} />,
      },

      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto4} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle4} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto4} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle4} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto4} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle4} />,
      },
      {
        large: <img alt={'BigPhoto'} className={s.bigImg} src={BigPhoto4} />,
        small: <img alt={'Rectangle1'} className={s.littleImg} src={Rectangle4} />,
      },
    ],
  },
}
