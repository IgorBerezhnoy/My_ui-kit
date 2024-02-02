import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: [
        'bodyBold2',
        'bodyRegular1',
        'bodyRegular2',
        'caption',
        'captionLink',
        'h1',
        'h2',
        'h3',
        'largeText',
        'mediumText',
        'overline',
        'subtitle1',
        'subtitle2',
        'subtitleLink1',
        'subtitleLink2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large text',
    variant: 'largeText',
  },
}
export const Medium: Story = {
  args: {
    children: 'mediumText',
    variant: 'mediumText',
  },
}
export const H1: Story = {
  args: {
    children: 'h1',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'h2',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'h3',
    variant: 'h3',
  },
}
export const Subtitle: Story = {
  args: {
    children: 'subtitle1',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'subtitle2',
    variant: 'subtitle2',
  },
}
export const Body: Story = {
  args: {
    children: 'bodyRegular1',
    variant: 'bodyRegular1',
  },
}
export const Body2: Story = {
  args: {
    children: 'bodyRegular2',
    variant: 'bodyRegular2',
  },
}
export const BodyBold: Story = {
  args: {
    children: 'bodyBold2',
    variant: 'bodyBold2',
  },
}
export const SubtitleLink: Story = {
  args: {
    as: 'a',
    children: 'subtitleLink1',
    href: '#',
    variant: 'subtitleLink1',
  },
}
export const SubtitleLink2: Story = {
  args: {
    as: 'a',
    children: 'subtitleLink2',
    href: '#',
    variant: 'subtitleLink2',
  },
}
export const Caption: Story = {
  args: {
    children: 'caption',
    variant: 'caption',
  },
}
export const CaptionLink: Story = {
  args: {
    as: 'a',
    children: 'captionLink',
    href: '#',
    variant: 'captionLink',
  },
}
