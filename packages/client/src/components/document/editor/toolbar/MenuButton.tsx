import { Tooltip, TooltipDescriptionOptionProps } from './Tooltip';
import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';

interface Props {
  onClick?: (e?: any) => void;
  isActive?: boolean;
  titleOption: TooltipDescriptionOptionProps;
}

function MenuButton({
  children,
  onClick,
  isActive = false,
  titleOption,
}: PropsWithChildren<Props>) {
  return (
    <Tooltip options={titleOption}>
      <Button onClick={onClick} isActive={isActive}>
        {children}
      </Button>
    </Tooltip>
  );
}

const Button = styled.button<{
  isActive?: boolean;
}>`
  cursor: pointer;
  font-size: 1.2em;
  color: ${colors.text0};
  border: none;
  padding: 4px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? colors.purple1 : 'transparent'};

  &:hover {
    background-color: ${colors.purple1};
    color: ${colors.text1};
  }
`;

export default MenuButton;
