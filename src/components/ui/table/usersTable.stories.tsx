import type { Meta, StoryObj } from '@storybook/react'

import { UsersTable } from '@/components/ui/table/usersTable'

const meta = {
  component: UsersTable,
  tags: ['autodocs'],
  title: 'Components/UI/UsersTable',
} satisfies Meta<typeof UsersTable>

export default meta
type Story = StoryObj<typeof meta>
const data = [
  {
    id: '1',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'active',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
  {
    id: '2',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'employed',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
  {
    id: '3',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'notActive',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
]

export const TableDecks: Story = {
  args: {
    data,
  },
}

export type UserTablePropsType = typeof data
