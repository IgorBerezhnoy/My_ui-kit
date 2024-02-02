import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'48'}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={'48'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M28 4H12C9.8 4 8.02 5.8 8.02 8L8 40C8 42.2 9.78 44 11.98 44H36C38.2 44 40 42.2 40 40V16L28 4ZM36 40H12V8H26V18H36V40ZM16 30.02L18.82 32.84L22 29.68V38H26V29.68L29.18 32.86L32 30.02L24.02 22L16 30.02Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
