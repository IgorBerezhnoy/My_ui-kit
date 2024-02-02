import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <rect fill={'#F22260'} height={'24'} rx={'12'} width={'24'} />
    <path
      d={
        'M13.6156 6.73239H12.5061C10.4719 6.73239 9.40352 7.75304 9.40352 9.26346C9.40352 10.9781 10.1432 11.7741 11.6637 12.7948L12.917 13.6317L9.3008 19H6.60912L9.85552 14.2032C7.98576 12.8763 6.93783 11.5905 6.93783 9.40636C6.93783 6.67123 8.84872 4.81368 12.4855 4.81368H16.1018V19H13.6156V6.73239Z'
      }
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
