import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { getSearchData } from '../lib/fuzzySearch';
import { useRetrieveAllTodosQuery } from '../lib/graphql/query/query.generated';
import { Todo } from '../lib/graphql/types';
import { scrollbarStyle } from '../styles/scrollbar';
import { Block } from './base';
import { TodoItem } from './todo';

interface Props {
  searchText: string;
}

function TodoSearch({ searchText }: Props) {
  const { loading, error, data } = useRetrieveAllTodosQuery();

  const todos = data?.retrieveAllTodos as Todo[];
  const searchedTodos = getSearchData(searchText, todos);

  return (
    <ListBlock>
      {data &&
      data.retrieveAllTodos &&
      searchedTodos &&
      searchedTodos.length !== 0 ? (
        searchedTodos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            hasDocument={todo.documentId ? true : false}
            isDone={todo.done}
            documentId={todo.documentId}
            editable={todo.editable}
            key={todo.id}
          />
        ))
      ) : (
        <Outlet />
      )}
    </ListBlock>
  );
}

const ListBlock = styled(Block)`
  gap: 0.625rem;
  overflow-y: auto;
  padding: 1rem;
  ${scrollbarStyle}
`;

export default TodoSearch;
