import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={'14'}
    viewBox={'0 0 14 14'}
    width={'14'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    fill={'#848484'}
    ref={ref}
  >
    <path
      d={
        'M7.00004 0.333374C3.31337 0.333374 0.333374 3.31337 0.333374 7.00004C0.333374 10.6867 3.31337 13.6667 7.00004 13.6667C10.6867 13.6667 13.6667 10.6867 13.6667 7.00004C13.6667 3.31337 10.6867 0.333374 7.00004 0.333374ZM10.3334 9.39337L9.39337 10.3334L7.00004 7.94004L4.60671 10.3334L3.66671 9.39337L6.06004 7.00004L3.66671 4.60671L4.60671 3.66671L7.00004 6.06004L9.39337 3.66671L10.3334 4.60671L7.94004 7.00004L10.3334 9.39337Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
