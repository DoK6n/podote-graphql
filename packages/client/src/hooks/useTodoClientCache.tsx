import { gql, useApolloClient } from '@apollo/client';
import { MutableRefObject } from 'react';
import {
  RetrieveAllTodosDocument,
  TodoEditableFragmentDoc,
} from '../lib/graphql/query/query.generated';
import { Query } from '../lib/graphql/types';
import { useAuthStore } from '../lib/store/auth';

interface ReturnType {
  getBeforeEditTodoTitle: (id: string) => string | undefined;
  setTodoEditable: (id: string) => void;
  setUnEditable: (id: string) => void;
  setEditable: (id: string) => void;
}

export const useTodoClientCache = (): ReturnType => {
  const client = useApolloClient();
  const { userState } = useAuthStore();

  const cacheTodo = client.readQuery<Query>({
    query: RetrieveAllTodosDocument,
  });

  const getBeforeEditTodoTitle = (id: string) => {
    if (!cacheTodo || !cacheTodo.retrieveAllTodos) return;

    const beforeEditTodoTitle = cacheTodo?.retrieveAllTodos.filter(
      (todo) => todo.id === id,
    )[0].title;
    return beforeEditTodoTitle;
  };

  const defaultCacheId = (id: string) => {
    return client.cache.identify({
      __typename: 'Todo',
      id: id,
      userId: userState?.uid,
    });
  };

  const setEditable = (id: string) => {
    client.cache.writeFragment({
      id: defaultCacheId(id),
      fragment: TodoEditableFragmentDoc,
      data: {
        editable: true,
      },
    });
  };

  const setUnEditable = (id: string) => {
    client.cache.writeFragment({
      id: defaultCacheId(id),
      fragment: TodoEditableFragmentDoc,
      data: {
        editable: false,
      },
    });
  };

  const setTodoEditable = (id: string) => {
    setEditable(id);

    if (!cacheTodo || !cacheTodo.retrieveAllTodos) return;

    const unSelectedCacheTodo = cacheTodo?.retrieveAllTodos.filter(
      (todo) => todo.id !== id,
    );

    unSelectedCacheTodo.forEach((todo) => {
      setUnEditable(todo.id);
    });
  };

  return {
    getBeforeEditTodoTitle,
    setTodoEditable,
    setUnEditable,
    setEditable,
  };
};
