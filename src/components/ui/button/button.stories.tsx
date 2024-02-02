import type { Meta, StoryObj } from '@storybook/react'

import { ChevronRightFilled } from '@/assets/icons'
import ArrowLeft from '@/assets/icons/ChevronRightFilled'

import { Button } from './'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: `Button`,
    variant: 'primary',
  },
}
export const PrimaryWithArrowLeft: Story = {
  args: {
    children: (
      <>
        <ArrowLeft />
        <span>Button primary</span>
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryWithArrowRight: Story = {
  args: {
    children: (
      <>
        <div>Button primary</div>
        <ChevronRightFilled />
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const SecondaryWithArrowLeft: Story = {
  args: {
    children: (
      <>
        <ArrowLeft />
        <div>Button primary</div>
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryWithArrowRight: Story = {
  args: {
    children: (
      <>
        <div>Button primary</div>
        <ChevronRightFilled />
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    children: 'Tertiary Button',
    disabled: false,
    href: 'https://www.google.com',
    variant: 'link',
  },
}

export const LinkWithArrowLeft: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <ArrowLeft />
        <div>Button primary</div>
      </>
    ),
    disabled: false,
    href: 'https://www.google.com',
    variant: 'link',
  },
}
export const LinkWithArrowRight: Story = {
  args: {
    as: 'a',
    children: (
      <>
        <div>Button primary</div>
        <ChevronRightFilled />
      </>
    ),
    disabled: false,
    href: 'https://www.google.com',
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
}
