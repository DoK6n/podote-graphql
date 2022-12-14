import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BaseButton } from '../base';
import DropdownItem from './DropdownItem';
import { ArrowDropDown } from '../vectors';

interface Props {
  itemList: string[];
}
function DropdownButton({ itemList }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState(itemList[0]);
  const ref = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const dataBtn = target.dataset.dropdownBtn;
      const dataIcon = target.dataset.dropdownBtnIcon;

      if (ref.current && !ref.current.contains(target)) {
        if (dataBtn || dataIcon) return;
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <BaseButton data-dropdown-btn onClick={onClick} fontSize={'20px'}>
        {currentItem} <ArrowDropDown data-dropdown-btn-icon size={20} />
      </BaseButton>
      <DropdownContent isOpen={isOpen} ref={ref}>
        <DropdownItem // FIXME 전역상태로 값 관리 해야할듯 -> list에서 item 정렬해야 하므로
          name={'All Todos'}
          onClick={() => {
            setCurrentItem('All Todos');
            setIsOpen(false);
          }}
        />
        <DropdownItem
          name={'Tags'}
          onClick={() => {
            setCurrentItem('Tags');
            setIsOpen(false);
          }}
        />
        <DropdownItem
          name={'Completed'}
          onClick={() => {
            setCurrentItem('Completed');
            setIsOpen(false);
          }}
        />
      </DropdownContent>
    </>
  );
}

interface DropdownContentProps {
  isOpen: boolean;
}

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  min-width: 160px;
  border: 1px solid #564689;
  background: #413966;
  box-shadow: 0 4px 12px rgb(0 0 0 / 6%), 0 12px 50px rgb(0 0 0 / 5%),
    inset 0 0 0 1px hsl(0deg 0% 95% / 3%);
  border-radius: 8px;
  padding: 3px;
  z-index: 2;
`;

export default DropdownButton;
