import type { Meta, StoryObj } from '@storybook/react'

import { ProjectCard } from './'

const meta = {
  argTypes: {},
  component: ProjectCard,
  tags: ['autodocs'],
  title: 'Components/UI/ProjectCard',
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    chips: ['#Jira', '#Java', '#Material Ui', '#Figma', '#qTest', '#Jira'],
    description:
      'Целью данного проекта является разработка и внедрение Интеллектуальной Системы Управления Запасами (ИСУЗ) для оптимизации процессов управления запасами в нашей компании. ИСУЗ должна автоматизировать и улучшить процессы планирования, закупки, хранения и распределения товаров, что приведет к сокращению затрат на запасы и повышению эффективности работы.',
    img: 'https://skill2go.com/thumbs/uploads/school/001/1301/887081e2.600.600.png',
    name: 'It-Incubator',
    price: '$3400',
    releaseDate: '02.08.2023',
  },
}
