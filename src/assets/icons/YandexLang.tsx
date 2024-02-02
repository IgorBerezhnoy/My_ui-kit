import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 13 16'}
    width={'13'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M5.77565 13.7234V15.1895H8.2328V13.4093C8.2328 11.0008 7.81275 9.91178 6.84674 7.81735L3.54959 0.633739H0.86145L4.7466 9.03212C5.54466 10.7495 5.77565 11.7338 5.77565 13.7234Z'
      }
    />
    <path d={'M10.4169 0.633795L7.35075 7.67085L9.89194 7.67084L13 0.633818L10.4169 0.633795Z'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
