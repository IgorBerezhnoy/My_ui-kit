import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M6 6h2v12H6V6Zm3.5 6 8.5 6V6l-8.5 6Z'} fill={'currentColor'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PrevArrow = memo(ForwardRef)
