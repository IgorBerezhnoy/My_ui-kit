import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    ref={ref}
    {...props}
    height={'18'}
    viewBox={'0 0 18 18'}
    width={'18'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g id={'ChevronDownFilled'}>
      <path
        d={
          'M12.4425 6.22125L9 9.65625L5.5575 6.22125L4.5 7.27875L9 11.7788L13.5 7.27875L12.4425 6.22125Z'
        }
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
