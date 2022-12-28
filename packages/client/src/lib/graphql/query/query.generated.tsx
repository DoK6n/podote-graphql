import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'UserWithSnsType', id: string, email: string, name: string, snsType: string } };

export type RetrieveAllTodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllTodosQuery = { __typename?: 'Query', retrieveAllTodos?: Array<{ __typename?: 'Todo', id: string, userId: string, title: string, done: boolean, editable: boolean, documentId?: string | null, isRemoved: boolean, orderKey: number, createdDt: any, updatedDt?: any | null, removedDt?: any | null }> | null };

export type TodoEditableFragment = { __typename?: 'Todo', editable: boolean };

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