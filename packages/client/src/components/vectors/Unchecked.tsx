import { SVGProps } from 'react';
import { colors } from '../../styles/colors';

const SvgUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='M11.4286 5.71429C9.91305 5.71429 8.4596 6.31633 7.38796 7.38796C6.31633 8.4596 5.71429 9.91305 5.71429 11.4286V28.5714C5.71429 30.087 6.31633 31.5404 7.38796 32.612C8.4596 33.6837 9.91305 34.2857 11.4286 34.2857H28.5714C30.087 34.2857 31.5404 33.6837 32.612 32.612C33.6837 31.5404 34.2857 30.087 34.2857 28.5714V11.4286C34.2857 9.91305 33.6837 8.4596 32.612 7.38796C31.5404 6.31633 30.087 5.71429 28.5714 5.71429H11.4286ZM0 11.4286C0 8.39753 1.20408 5.49063 3.34736 3.34736C5.49063 1.20408 8.39753 0 11.4286 0H28.5714C31.6025 0 34.5094 1.20408 36.6526 3.34736C38.7959 5.49063 40 8.39753 40 11.4286V28.5714C40 31.6025 38.7959 34.5094 36.6526 36.6526C34.5094 38.7959 31.6025 40 28.5714 40H11.4286C8.39753 40 5.49063 38.7959 3.34736 36.6526C1.20408 34.5094 0 31.6025 0 28.5714V11.4286Z'
      fill={colors.brightPurble0}
    />
  </svg>
);

export default SvgUnchecked;
