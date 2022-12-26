import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { scrollbarStyle } from '../../styles/scrollbar';
import { FadeView } from '../base';
import TodoItem from './TodoItem';
import { Outlet } from 'react-router-dom';
import { useRetrieveAllTodosQuery } from '../../lib/graphql/query/query.generated';

interface Props {}

function TodoList({}: Props) {
  const { loading, error, data } = useRetrieveAllTodosQuery();
  console.log(data);

  return (
    <Block>
      <FadeView />
      <div css={listTopGapStyle} />
      {data ? (
        data.retrieveAllTodos?.map((d) => (
          <TodoItem
            title={d.title}
            docsId={d.id}
            hasDocument={d.documentId ? true : false}
            key={d.id}
          />
        ))
      ) : (
        <Outlet />
      )}
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
