import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'UserWithSnsType', id: string, email: string, name: string, snsType: string } };

export type RetrieveAllTodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllTodosQuery = { __typename?: 'Query', retrieveAllTodos?: Array<{ __typename?: 'Todo', id: string, userId: string, title: string, done: boolean, editable: boolean, documentId?: string | null, isRemoved: boolean, orderKey: number, createdDt: any, updatedDt?: any | null, removedDt?: any | null }> | null };

export type RetrieveTodoQueryVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type RetrieveTodoQuery = { __typename?: 'Query', retrieveTodo?: { __typename?: 'Todo', id: string, userId: string, documentId?: string | null, title: string, done: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, document?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null } | null } | null };

export type TodoEditableFragment = { __typename?: 'Todo', editable: boolean };

export type RetrieveRemovedTodoQueryVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type RetrieveRemovedTodoQuery = { __typename?: 'Query', retrieveRemovedTodo?: { __typename?: 'Todo', id: string, userId: string, documentId?: string | null, title: string, done: boolean, isRemoved: boolean, removedDt?: any | null } | null };

export type RetrieveAllRemovedTodoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllRemovedTodoQuery = { __typename?: 'Query', retrieveAllRemovedTodo?: Array<{ __typename?: 'Todo', id: string, userId: string, documentId?: string | null, title: string, done: boolean, isRemoved: boolean, removedDt?: any | null }> | null };

export type RetrieveDocumentQueryVariables = Types.Exact<{
  data: Types.FindOneDocumentInput;
}>;


export type RetrieveDocumentQuery = { __typename?: 'Query', retrieveDocument?: { __typename?: 'Document', id: string, userId: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, todo?: { __typename?: 'Todo', id: string, title: string, done: boolean, userId: string } | null } | null };

export type RetrieveRemovedDocumentQueryVariables = Types.Exact<{
  data: Types.FindOneDocumentInput;
}>;


export type RetrieveRemovedDocumentQuery = { __typename?: 'Query', retrieveRemovedDocument?: { __typename?: 'Document', id: string, userId: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null } | null };

export type RetrieveAllDocumentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllDocumentsQuery = { __typename?: 'Query', retrieveAllDocuments?: Array<{ __typename?: 'Document', id: string, userId: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, todo?: { __typename?: 'Todo', id: string, title: string, done: boolean, userId: string } | null }> | null };

export type RetrieveAllRemovedDocumentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllRemovedDocumentsQuery = { __typename?: 'Query', retrieveAllRemovedDocuments?: Array<{ __typename?: 'Document', id: string, userId: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, todo?: { __typename?: 'Todo', id: string, title: string, done: boolean, userId: string } | null }> | null };

export const TodoEditableFragmentDoc = gql`
    fragment todoEditable on Todo {
  editable
}
    `;
export const LoginDocument = gql`
    query login {
  login {
    id
    email
    name
    snsType
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export function refetchLoginQuery(variables?: LoginQueryVariables) {
      return { query: LoginDocument, variables: variables }
    }
export const RetrieveAllTodosDocument = gql`
    query retrieveAllTodos {
  retrieveAllTodos {
    id
    userId
    title
    done
    editable
    documentId
    isRemoved
    orderKey
    createdDt
    updatedDt
    removedDt
  }
}
    `;

/**
 * __useRetrieveAllTodosQuery__
 *
 * To run a query within a React component, call `useRetrieveAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetrieveAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveAllTodosQuery, RetrieveAllTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveAllTodosQuery, RetrieveAllTodosQueryVariables>(RetrieveAllTodosDocument, options);
      }
export function useRetrieveAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveAllTodosQuery, RetrieveAllTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveAllTodosQuery, RetrieveAllTodosQueryVariables>(RetrieveAllTodosDocument, options);
        }
export type RetrieveAllTodosQueryHookResult = ReturnType<typeof useRetrieveAllTodosQuery>;
export type RetrieveAllTodosLazyQueryHookResult = ReturnType<typeof useRetrieveAllTodosLazyQuery>;
export type RetrieveAllTodosQueryResult = Apollo.QueryResult<RetrieveAllTodosQuery, RetrieveAllTodosQueryVariables>;
export function refetchRetrieveAllTodosQuery(variables?: RetrieveAllTodosQueryVariables) {
      return { query: RetrieveAllTodosDocument, variables: variables }
    }
export const RetrieveTodoDocument = gql`
    query retrieveTodo($data: TodoIdInput!) {
  retrieveTodo(data: $data) {
    id
    userId
    documentId
    title
    done
    createdDt
    updatedDt
    isRemoved
    removedDt
    document {
      id
      content
      todoId
      createdDt
      updatedDt
      isRemoved
      removedDt
    }
  }
}
    `;

/**
 * __useRetrieveTodoQuery__
 *
 * To run a query within a React component, call `useRetrieveTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveTodoQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRetrieveTodoQuery(baseOptions: Apollo.QueryHookOptions<RetrieveTodoQuery, RetrieveTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveTodoQuery, RetrieveTodoQueryVariables>(RetrieveTodoDocument, options);
      }
export function useRetrieveTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveTodoQuery, RetrieveTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveTodoQuery, RetrieveTodoQueryVariables>(RetrieveTodoDocument, options);
        }
export type RetrieveTodoQueryHookResult = ReturnType<typeof useRetrieveTodoQuery>;
export type RetrieveTodoLazyQueryHookResult = ReturnType<typeof useRetrieveTodoLazyQuery>;
export type RetrieveTodoQueryResult = Apollo.QueryResult<RetrieveTodoQuery, RetrieveTodoQueryVariables>;
export function refetchRetrieveTodoQuery(variables: RetrieveTodoQueryVariables) {
      return { query: RetrieveTodoDocument, variables: variables }
    }
export const RetrieveRemovedTodoDocument = gql`
    query retrieveRemovedTodo($data: TodoIdInput!) {
  retrieveRemovedTodo(data: $data) {
    id
    userId
    documentId
    title
    done
    isRemoved
    removedDt
  }
}
    `;

/**
 * __useRetrieveRemovedTodoQuery__
 *
 * To run a query within a React component, call `useRetrieveRemovedTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveRemovedTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveRemovedTodoQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRetrieveRemovedTodoQuery(baseOptions: Apollo.QueryHookOptions<RetrieveRemovedTodoQuery, RetrieveRemovedTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveRemovedTodoQuery, RetrieveRemovedTodoQueryVariables>(RetrieveRemovedTodoDocument, options);
      }
export function useRetrieveRemovedTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveRemovedTodoQuery, RetrieveRemovedTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveRemovedTodoQuery, RetrieveRemovedTodoQueryVariables>(RetrieveRemovedTodoDocument, options);
        }
export type RetrieveRemovedTodoQueryHookResult = ReturnType<typeof useRetrieveRemovedTodoQuery>;
export type RetrieveRemovedTodoLazyQueryHookResult = ReturnType<typeof useRetrieveRemovedTodoLazyQuery>;
export type RetrieveRemovedTodoQueryResult = Apollo.QueryResult<RetrieveRemovedTodoQuery, RetrieveRemovedTodoQueryVariables>;
export function refetchRetrieveRemovedTodoQuery(variables: RetrieveRemovedTodoQueryVariables) {
      return { query: RetrieveRemovedTodoDocument, variables: variables }
    }
export const RetrieveAllRemovedTodoDocument = gql`
    query retrieveAllRemovedTodo {
  retrieveAllRemovedTodo {
    id
    userId
    documentId
    title
    done
    isRemoved
    removedDt
  }
}
    `;

/**
 * __useRetrieveAllRemovedTodoQuery__
 *
 * To run a query within a React component, call `useRetrieveAllRemovedTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveAllRemovedTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveAllRemovedTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetrieveAllRemovedTodoQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveAllRemovedTodoQuery, RetrieveAllRemovedTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveAllRemovedTodoQuery, RetrieveAllRemovedTodoQueryVariables>(RetrieveAllRemovedTodoDocument, options);
      }
export function useRetrieveAllRemovedTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveAllRemovedTodoQuery, RetrieveAllRemovedTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveAllRemovedTodoQuery, RetrieveAllRemovedTodoQueryVariables>(RetrieveAllRemovedTodoDocument, options);
        }
export type RetrieveAllRemovedTodoQueryHookResult = ReturnType<typeof useRetrieveAllRemovedTodoQuery>;
export type RetrieveAllRemovedTodoLazyQueryHookResult = ReturnType<typeof useRetrieveAllRemovedTodoLazyQuery>;
export type RetrieveAllRemovedTodoQueryResult = Apollo.QueryResult<RetrieveAllRemovedTodoQuery, RetrieveAllRemovedTodoQueryVariables>;
export function refetchRetrieveAllRemovedTodoQuery(variables?: RetrieveAllRemovedTodoQueryVariables) {
      return { query: RetrieveAllRemovedTodoDocument, variables: variables }
    }
export const RetrieveDocumentDocument = gql`
    query retrieveDocument($data: FindOneDocumentInput!) {
  retrieveDocument(data: $data) {
    id
    userId
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
    todo {
      id
      title
      done
      userId
    }
  }
}
    `;

/**
 * __useRetrieveDocumentQuery__
 *
 * To run a query within a React component, call `useRetrieveDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveDocumentQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRetrieveDocumentQuery(baseOptions: Apollo.QueryHookOptions<RetrieveDocumentQuery, RetrieveDocumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveDocumentQuery, RetrieveDocumentQueryVariables>(RetrieveDocumentDocument, options);
      }
export function useRetrieveDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveDocumentQuery, RetrieveDocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveDocumentQuery, RetrieveDocumentQueryVariables>(RetrieveDocumentDocument, options);
        }
export type RetrieveDocumentQueryHookResult = ReturnType<typeof useRetrieveDocumentQuery>;
export type RetrieveDocumentLazyQueryHookResult = ReturnType<typeof useRetrieveDocumentLazyQuery>;
export type RetrieveDocumentQueryResult = Apollo.QueryResult<RetrieveDocumentQuery, RetrieveDocumentQueryVariables>;
export function refetchRetrieveDocumentQuery(variables: RetrieveDocumentQueryVariables) {
      return { query: RetrieveDocumentDocument, variables: variables }
    }
export const RetrieveRemovedDocumentDocument = gql`
    query retrieveRemovedDocument($data: FindOneDocumentInput!) {
  retrieveRemovedDocument(data: $data) {
    id
    userId
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
  }
}
    `;

/**
 * __useRetrieveRemovedDocumentQuery__
 *
 * To run a query within a React component, call `useRetrieveRemovedDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveRemovedDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveRemovedDocumentQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRetrieveRemovedDocumentQuery(baseOptions: Apollo.QueryHookOptions<RetrieveRemovedDocumentQuery, RetrieveRemovedDocumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveRemovedDocumentQuery, RetrieveRemovedDocumentQueryVariables>(RetrieveRemovedDocumentDocument, options);
      }
export function useRetrieveRemovedDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveRemovedDocumentQuery, RetrieveRemovedDocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveRemovedDocumentQuery, RetrieveRemovedDocumentQueryVariables>(RetrieveRemovedDocumentDocument, options);
        }
export type RetrieveRemovedDocumentQueryHookResult = ReturnType<typeof useRetrieveRemovedDocumentQuery>;
export type RetrieveRemovedDocumentLazyQueryHookResult = ReturnType<typeof useRetrieveRemovedDocumentLazyQuery>;
export type RetrieveRemovedDocumentQueryResult = Apollo.QueryResult<RetrieveRemovedDocumentQuery, RetrieveRemovedDocumentQueryVariables>;
export function refetchRetrieveRemovedDocumentQuery(variables: RetrieveRemovedDocumentQueryVariables) {
      return { query: RetrieveRemovedDocumentDocument, variables: variables }
    }
export const RetrieveAllDocumentsDocument = gql`
    query retrieveAllDocuments {
  retrieveAllDocuments {
    id
    userId
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
    todo {
      id
      title
      done
      userId
    }
  }
}
    `;

/**
 * __useRetrieveAllDocumentsQuery__
 *
 * To run a query within a React component, call `useRetrieveAllDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveAllDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveAllDocumentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetrieveAllDocumentsQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveAllDocumentsQuery, RetrieveAllDocumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveAllDocumentsQuery, RetrieveAllDocumentsQueryVariables>(RetrieveAllDocumentsDocument, options);
      }
export function useRetrieveAllDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveAllDocumentsQuery, RetrieveAllDocumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveAllDocumentsQuery, RetrieveAllDocumentsQueryVariables>(RetrieveAllDocumentsDocument, options);
        }
export type RetrieveAllDocumentsQueryHookResult = ReturnType<typeof useRetrieveAllDocumentsQuery>;
export type RetrieveAllDocumentsLazyQueryHookResult = ReturnType<typeof useRetrieveAllDocumentsLazyQuery>;
export type RetrieveAllDocumentsQueryResult = Apollo.QueryResult<RetrieveAllDocumentsQuery, RetrieveAllDocumentsQueryVariables>;
export function refetchRetrieveAllDocumentsQuery(variables?: RetrieveAllDocumentsQueryVariables) {
      return { query: RetrieveAllDocumentsDocument, variables: variables }
    }
export const RetrieveAllRemovedDocumentsDocument = gql`
    query retrieveAllRemovedDocuments {
  retrieveAllRemovedDocuments {
    id
    userId
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
    todo {
      id
      title
      done
      userId
    }
  }
}
    `;

/**
 * __useRetrieveAllRemovedDocumentsQuery__
 *
 * To run a query within a React component, call `useRetrieveAllRemovedDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveAllRemovedDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveAllRemovedDocumentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetrieveAllRemovedDocumentsQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveAllRemovedDocumentsQuery, RetrieveAllRemovedDocumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveAllRemovedDocumentsQuery, RetrieveAllRemovedDocumentsQueryVariables>(RetrieveAllRemovedDocumentsDocument, options);
      }
export function useRetrieveAllRemovedDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveAllRemovedDocumentsQuery, RetrieveAllRemovedDocumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveAllRemovedDocumentsQuery, RetrieveAllRemovedDocumentsQueryVariables>(RetrieveAllRemovedDocumentsDocument, options);
        }
export type RetrieveAllRemovedDocumentsQueryHookResult = ReturnType<typeof useRetrieveAllRemovedDocumentsQuery>;
export type RetrieveAllRemovedDocumentsLazyQueryHookResult = ReturnType<typeof useRetrieveAllRemovedDocumentsLazyQuery>;
export type RetrieveAllRemovedDocumentsQueryResult = Apollo.QueryResult<RetrieveAllRemovedDocumentsQuery, RetrieveAllRemovedDocumentsQueryVariables>;
export function refetchRetrieveAllRemovedDocumentsQuery(variables?: RetrieveAllRemovedDocumentsQueryVariables) {
      return { query: RetrieveAllRemovedDocumentsDocument, variables: variables }
    }