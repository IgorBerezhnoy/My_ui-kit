import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'20'}
    ref={ref}
    viewBox={'0 0 20 20'}
    width={'20'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M15.8332 10.8334H10.8332V15.8334H9.1665V10.8334H4.1665V9.16675H9.1665V4.16675H10.8332V9.16675H15.8332V10.8334Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
