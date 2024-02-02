import { MutableRefObject, useEffect, useRef } from 'react'

export function useHorizontalScroll(): MutableRefObject<any> {
  const elRef: MutableRefObject<HTMLElement | null | undefined> = useRef()

  useEffect(() => {
    const el = elRef.current

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) {
          return
        }
        e.preventDefault()
        el.scrollTo({
          behavior: 'smooth',
          left: el.scrollLeft + e.deltaY,
        })
      }

      el.addEventListener('wheel', onWheel)

      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return elRef
}
