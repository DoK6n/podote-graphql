import { css } from '@emotion/react';
import FooterTabItem from './FooterTabItem';
import { colors } from '../styles/colors';

function Footer() {
  return (
    <footer css={FooterStyle}>
      <FooterTabItem icon='home' to='/' />
      <FooterTabItem icon='search' to='/search' />
      <FooterTabItem icon='todo' to='/todo' />
      <FooterTabItem icon='setting' to='/setting' />
    </footer>
  );
}

const FooterStyle = css`
  height: 56px;
  border-top: 1px solid ${colors.purple5};
  display: flex;
`;

export default Footer;
