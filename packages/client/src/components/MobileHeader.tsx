import styled from '@emotion/styled';
import { colors } from '../styles/colors';
import { LogoText } from './vectors';
import { Logo } from './vectors';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}

function MobileHeader({
  title = (
    <StyledLogo>
      <Logo width={24} height={24} /> <LogoText width={120} height={40} />
    </StyledLogo>
  ),
  headerLeft,
  headerRight,
}: Props) {
  return (
    <Block>
      {headerLeft && <HeaderSide position="left">{headerLeft}</HeaderSide>}
      <Title className="title">{title}</Title>
      {headerRight && <HeaderSide position="right">{headerRight}</HeaderSide>}
    </Block>
  );
}

const Block = styled.header`
  position: relative;
  height: 56px;
  border-bottom: 1px solid ${colors.purple5};
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  color: ${colors.text1};
  font-size: 28px;
  font-weight: 600;
`;

const HeaderSide = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  ${(props) => props.position}: 16px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default MobileHeader;
