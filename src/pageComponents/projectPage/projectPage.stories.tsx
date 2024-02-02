import type { Meta, StoryObj } from '@storybook/react'

import s from '@/components/ui/slider/slider.module.scss'

import { ProjectPage } from './'

const meta = {
  argTypes: {},
  component: ProjectPage,
  tags: ['autodocs'],
  title: 'Page/ProjectPage',
} satisfies Meta<typeof ProjectPage>

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
    chips: ['#Jira', '#Java', '#Material Ui', '#Figma', '#qTest', '#Jira'],
    dateStart: '02.08.2022',
    description:
      'Целью данного проекта является разработка и внедрение Интеллектуальной Системы Управления Запасами (ИСУЗ) для оптимизации процессов управления запасами в нашей компании. ' +
      'ИСУЗ должна автоматизировать и улучшить процессы планирования, закупки, хранения и распределения товаров, что приведет к сокращению затрат на запасы и повышению эффективности работы.Целью данного проекта является разработка и внедрение Интеллектуальной Системы Управления Запасами (ИСУЗ) для оптимизации процессов управления запасами в нашей компании. ИСУЗ должна автоматизировать и улучшить процессы планирования, закупки, хранения и распределения товаров, что приведет к сокращению затрат на запасы и повышению эффективности работы.Целью данного проекта является разработка и внедрение Интеллектуальной Системы Управления Запасами (ИСУЗ) для оптимизации процессов управления запасами в нашей компании. ИСУЗ должна автоматизировать и улучшить процессы планирования, закупки, хранения и распределения товаров, что приведет к сокращению затрат на запасы и повышению эффективности работы.Целью данного проекта является разработка и внедрение Интеллектуальной Системы Управления Запасами (ИСУЗ) для оптимизации процессов управления запасами в нашей компании. ИСУЗ должна автоматизировать и улучшить процессы планирования, закупки, хранения и распределения товаров, что приведет к сокращению затрат на запасы и повышению эффективности работы.',
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
    img: 'https://skill2go.com/thumbs/uploads/school/001/1301/887081e2.600.600.png',
    name: 'It-Incubator',
    price: '$3400',
    releaseDate: '02.08.2023',
    table: [
      {
        id: '1',
        img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
        linkedIn: 'LinkedIn',
        name: 'Prabodhan Fitzgerald',
        offerHeap: 'OfferHeap',
        position: 'Front-End',
        responsibilities:
          'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.',
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
        responsibilities:
          'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.',
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
        responsibilities:
          'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.',
        status: 'notActive',
        technologies: ['#Jira', '#Jira', '#Jira'],
      },
    ],
  },
}
