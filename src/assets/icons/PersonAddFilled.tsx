import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={'20'}
    viewBox={'0 0 20 20'}
    width={'20'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    fill={'currentColor'}
    ref={ref}
  >
    <path
      d={
        'M12.4997 10C14.3413 10 15.833 8.50837 15.833 6.66671C15.833 4.82504 14.3413 3.33337 12.4997 3.33337C10.658 3.33337 9.16634 4.82504 9.16634 6.66671C9.16634 8.50837 10.658 10 12.4997 10ZM4.99967 8.33337V5.83337H3.33301V8.33337H0.833008V10H3.33301V12.5H4.99967V10H7.49967V8.33337H4.99967ZM12.4997 11.6667C10.2747 11.6667 5.83301 12.7834 5.83301 15V16.6667H19.1663V15C19.1663 12.7834 14.7247 11.6667 12.4997 11.6667Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
