import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { useModalStore } from '../../lib/store/modal';
import { colors } from '../../styles/colors';
import { Close } from '../vectors';

interface Props {
  menus: React.ReactNode;
}

function MobileModal({ menus }: Props) {
  const { modalClose } = useModalStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (ref.current && !ref.current.contains(target)) {
        modalClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div css={modalOverlay}>
      <div css={modalCloseButton}>
        <Close size={30} />
      </div>
      <div css={menuBox} ref={ref}>
        {menus}
      </div>
    </div>
  );
}

const modalCloseButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const modalOverlay = css`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column-reverse;
`;

const menuBox = css`
  width: fit-content;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  padding: 1rem 2rem 2rem 2rem;
  border-radius: 1rem;
  color: ${colors.text1};
`;

export default MobileModal;
