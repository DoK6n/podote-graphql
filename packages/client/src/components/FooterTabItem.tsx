import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { Home, Search, UiChecksGrid, Settings } from './vectors';
import { colors } from '../styles/colors';

const iconMap = {
  home: <Home size={25} />,
  search: <Search size={25} />,
  todo: <UiChecksGrid size={25} />,
  setting: <Settings size={25} />,
};

interface Props {
  icon: keyof typeof iconMap;
  to: string;
}

function FooterTabItem({ icon, to }: Props) {
  const iconEl = iconMap[icon];
  return (
    <LinkItem
      to={to}
      className={({ isActive }: { isActive: boolean }) => {
        if (isActive) return 'active';
        return '';
      }}>
      {iconEl}
    </LinkItem>
  );
}

const sharedStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray1};
`;

const LinkItem = styled(NavLink)`
  ${sharedStyle}
  &.active {
    background-color: ${colors.purple1};
  }
  &:hover {
    color: ${colors.gray0};
  }
`;

export default FooterTabItem;
