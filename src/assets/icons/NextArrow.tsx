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
    <path d={'m6 18 8.5-6L6 6v12ZM16 6v12h2V6h-2Z'} fill={'currentColor'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const NextArrow = memo(ForwardRef)
