import { keyframes } from '@emotion/react';

/**
 * 요소가 좌->우 이동과 함께 살짝 튕기면서 나타나는 효과
 * @example
 * animation: ${fadeInLeft} 0.1s ease;
 */
export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  90% {
    transform: translate3d(5%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
