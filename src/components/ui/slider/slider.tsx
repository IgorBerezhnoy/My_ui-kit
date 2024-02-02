import { JSX, ReactNode } from 'react'

import { FullScreen, FullScreenOut } from '@/assets'
import { Modal } from '@/components/ui/modal'
import { useHorizontalScroll } from '@/components/ui/slider/useHorizontalScroll'
import * as Dialog from '@radix-ui/react-dialog'

import s from './slider.module.scss'

export const Slider = ({ images, ...rest }: Props): JSX.Element => {
  const scrollRef = useHorizontalScroll()

  return (
    <div className={s.wrapper} ref={scrollRef} {...rest}>
      {images.map((el, i) => (
        <Modal
          key={i}
          trigger={
            <button className={s.imageContainer}>
              {el.small}
              {/*className={s.littleImg}*/}
              <span className={s.iconWrapper}>
                <FullScreen className={s.icon} />
              </span>
            </button>
          }
        >
          <div className={s.bigImgWrapper}>
            {el.large} {/*className={s.bigImg}*/}
            <Dialog.Close className={s.fullScreenOutWrapper}>
              <FullScreenOut className={s.FullScreenOut} />
            </Dialog.Close>
          </div>
        </Modal>
      ))}
    </div>
  )
}

interface Props {
  images: Image[]
  //Временная типизация
}

export interface Image {
  large: ReactNode
  small: ReactNode
}
