import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { scrollbarStyle } from '../../styles/scrollbar';
import { FadeView } from '../base';

interface Props {}

function TodoList({ children }: PropsWithChildren<Props>) {
  return (
    <Block>
      <FadeView />
      <div css={listTopGapStyle} />
      {children}
    </Block>
  );
}

const listTopGapStyle = css`
  margin-bottom: 1rem;
`;

const Block = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  ${scrollbarStyle}
`;

export default TodoList;
