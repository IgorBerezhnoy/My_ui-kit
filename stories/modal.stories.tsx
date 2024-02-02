import type { Meta, StoryObj } from '@storybook/react'

import * as Dialog from '@radix-ui/react-dialog'

import s from '../src/components/ui/modal/modal.module.scss'

import { EditBlack, Ic_image, Linkedin, OFH } from '../src/assets'
import { Button, Card, Select, TextField, Typography } from '../src/components/ui'
import { OptionType } from '../src/components/ui/Select/Select'
import { Modal } from '../src/components/ui/modal'
import { ModalFooter } from '../src/components/ui/modal/modalComponent/modalFooter/modalFooter'
import { ModalHeader } from '../src/components/ui/modal/modalComponent/modalHeader/modalHeader'
import { ModalMainContent } from '../src/components/ui/modal/modalComponent/modalMainContent/modalMainContent'
import { TextArea } from '../src/components/ui/textArea'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const initialState: OptionType[] = [
  { title: 'Новый', value: 'first' },
  { title: 'Существующий', value: 'second' },
]

export const AddNewUser: Story = {
  args: {
    children: (
      <Card className={s.card}>
        <ModalHeader title={'Добавление участника'} />
        <ModalMainContent>
          <Select fullWidth label={'Участник'} options={initialState} value={'first'} />
        </ModalMainContent>
        <ModalFooter className={s.footer}>
          <Dialog.Close className={`${s.button} ${s.red}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Отменить
            </Typography>
          </Dialog.Close>
          <Dialog.Close className={`${s.button} ${s.blue}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Продолжить
            </Typography>
          </Dialog.Close>
        </ModalFooter>
      </Card>
    ),
    trigger: <Button>Some trigger</Button>,
  },
}
export const AddNewUserWithName: Story = {
  args: {
    children: (
      <Card className={s.card}>
        <ModalHeader title={'Добавление участника'} />
        <ModalMainContent className={s.mainContent}>
          <Select fullWidth label={'Участник'} options={initialState} value={'second'} />
          <Select
            fullWidth
            label={'Имя участника'}
            options={[{ title: 'Prabodhan Fitzgerald', value: 'Prabodhan Fitzgerald' }]}
            value={'Prabodhan Fitzgerald'}
          />
        </ModalMainContent>
        <ModalFooter className={s.footer}>
          <Dialog.Close className={`${s.button} ${s.red}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Отменить
            </Typography>
          </Dialog.Close>
          <Dialog.Close className={`${s.button} ${s.blue}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Продолжить
            </Typography>
          </Dialog.Close>
        </ModalFooter>
      </Card>
    ),
    trigger: <Button>Some trigger</Button>,
  },
}
export const EditingUser: Story = {
  args: {
    children: (
      <Card className={s.card}>
        <ModalHeader title={'Редактирование участника'} />
        <ModalMainContent className={s.mainContent}>
          <div className={s.imageAndButton}>
            <img
              alt={'user photo'}
              className={s.img}
              src={'https://personalcar.in/assets/images/testimonial/20220816100621user.png'}
            />
            <Button>
              <Ic_image />
              Загрузить фото
            </Button>
          </div>
          <TextField label={'Имя'} value={'Fitzgerald'} />
          <TextField label={'Фамилия'} value={'Prabodhan'} />
          <Select
            fullWidth
            label={'Статус'}
            options={[{ title: 'Активный', value: 'active' }]}
            value={'active'}
          />
          <TextField label={'OfferHeap'} value={'https://'} />
          <TextField label={'LinkedIn'} value={'https://'} />
          <TextField label={'Укажите технологию'} value={'React'} />
          <TextField label={'Позиция'} value={'Front-End'} />
          <TextArea
            label={'Обязанности на проекте'}
            rows={3}
            value={
              'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.'
            }
          />
        </ModalMainContent>
        <ModalFooter className={s.footer}>
          <Dialog.Close className={`${s.button} ${s.red}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Отменить
            </Typography>
          </Dialog.Close>
          <Dialog.Close className={`${s.button} ${s.blue}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Продолжить
            </Typography>
          </Dialog.Close>
        </ModalFooter>
      </Card>
    ),
    trigger: <Button>Some trigger</Button>,
  },
}
export const EditingUserWithIcons: Story = {
  args: {
    children: (
      <Card className={s.card}>
        <ModalHeader title={'Добавление участника'} />
        <ModalMainContent className={s.mainContent}>
          <div className={s.imageAndInfo}>
            <img
              alt={'user photo'}
              className={s.img}
              src={'https://personalcar.in/assets/images/testimonial/20220816100621user.png'}
            />
            <div className={s.nameAndLinks}>
              <Typography variant={'h3'}>Prabodhan Fitzgerald</Typography>
              <div className={s.links}>
                <div className={s.link}>
                  <Typography variant={'caption'}>OfferHeap:</Typography>
                  <OFH className={s.ofh} />
                </div>{' '}
                <div className={s.link}>
                  <Typography variant={'caption'}>LinkedIn:</Typography>
                  <Linkedin />
                </div>
              </div>
              <Button variant={'secondary'}>
                <EditBlack />
                Внести изменения
              </Button>
            </div>
          </div>
          <Select
            fullWidth
            label={'Статус'}
            options={[{ title: 'Активный', value: 'active' }]}
            value={'active'}
          />
          <TextField label={'Укажите технологию'} value={'React'} />
          <TextField label={'Позиция'} value={'Front-End'} />
          <TextArea
            label={'Обязанности на проекте'}
            rows={3}
            value={
              'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.'
            }
          />
        </ModalMainContent>
        <ModalFooter className={s.footer}>
          <Dialog.Close className={`${s.button} ${s.red}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Отменить
            </Typography>
          </Dialog.Close>
          <Dialog.Close className={`${s.button} ${s.blue}`}>
            <Typography aria-label={'Close'} variant={'subtitle1'}>
              Продолжить
            </Typography>
          </Dialog.Close>
        </ModalFooter>
      </Card>
    ),
    trigger: <Button>Some trigger</Button>,
  },
}
