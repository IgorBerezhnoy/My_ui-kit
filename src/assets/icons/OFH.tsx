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
    <path
      clipRule={'evenodd'}
      d={
        'M9.32288 6.90206H12.8522V8.11851H9.32288C8.65075 8.11851 8.10588 8.66314 8.10588 9.33496V14.6873C8.10588 15.3181 8.58619 15.8368 9.20118 15.8978V17.1173C7.91345 17.0539 6.88887 15.9902 6.88887 14.6873V9.33496C6.88887 7.99131 7.97861 6.90206 9.32288 6.90206ZM11.1484 17.1202H14.6777C16.022 17.1202 17.1117 16.031 17.1117 14.6873V9.33496C17.1117 8.0321 16.0871 6.96843 14.7994 6.90505V8.12452C15.4144 8.18555 15.8947 8.70419 15.8947 9.33496V14.6873C15.8947 15.3592 15.3498 15.9038 14.6777 15.9038H11.1484V17.1202Z'
      }
      fill={'white'}
      fillRule={'evenodd'}
    />
    <path
      clipRule={'evenodd'}
      d={
        'M13.8258 4.83406C14.1619 4.83406 14.4343 4.56175 14.4343 4.22583C14.4343 3.88992 14.1619 3.61761 13.8258 3.61761C13.4898 3.61761 13.2173 3.88992 13.2173 4.22583C13.2173 4.56175 13.4898 4.83406 13.8258 4.83406ZM15.4079 4.22583C15.4079 4.88368 15.0061 5.4477 14.4343 5.68602V11.4029V12.6193V14.9306H13.2173V12.6193H10.7833V18.3362C11.3551 18.5745 11.7569 19.1385 11.7569 19.7964C11.7569 20.6698 11.0486 21.3778 10.1748 21.3778C9.30105 21.3778 8.59271 20.6698 8.59271 19.7964C8.59271 19.1385 8.99458 18.5745 9.56632 18.3362V12.6193V11.4029V9.09163H10.7833V11.4029H13.2173V5.68602C12.6456 5.4477 12.2437 4.88368 12.2437 4.22583C12.2437 3.35246 12.9521 2.64445 13.8258 2.64445C14.6996 2.64445 15.4079 3.35246 15.4079 4.22583ZM10.7833 19.7964C10.7833 20.1323 10.5109 20.4046 10.1748 20.4046C9.83875 20.4046 9.56632 20.1323 9.56632 19.7964C9.56632 19.4605 9.83875 19.1882 10.1748 19.1882C10.5109 19.1882 10.7833 19.4605 10.7833 19.7964Z'
      }
      fill={'#FED745'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
