import styled from '@emotion/styled';
import { colors } from '../styles/colors';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
}

function MobileHeader({
  title = <StyledLogo>Header</StyledLogo>,
  className,
}: Props) {
  return (
    <Block className={className}>
      <Title className='title'>{title}</Title>
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
  display: block;
  width: 84px;
  height: 17px;
`;

const Title = styled.div`
  color: ${colors.text1};
  font-size: 18px;
  font-weight: 600;
`;

export default MobileHeader;
