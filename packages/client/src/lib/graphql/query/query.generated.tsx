import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RetrieveUserByIdQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveUserByIdQuery = { __typename?: 'Query', retrieveUserById: { __typename?: 'UserWithSnsType', id: string, email: string, name: string, snsType: string } };

export type RetrieveAllTodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type RetrieveAllTodosQuery = { __typename?: 'Query', retrieveAllTodos?: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, documentId?: string | null, isRemoved: boolean, orderKey: number }> | null };


export const RetrieveUserByIdDocument = gql`
    query retrieveUserById {
  retrieveUserById {
    id
    email
    name
    snsType
  }
}
    `;

/**
 * __useRetrieveUserByIdQuery__
 *
 * To run a query within a React component, call `useRetrieveUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveUserByIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useRetrieveUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveUserByIdQuery, RetrieveUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveUserByIdQuery, RetrieveUserByIdQueryVariables>(RetrieveUserByIdDocument, options);
      }
export function useRetrieveUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveUserByIdQuery, RetrieveUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveUserByIdQuery, RetrieveUserByIdQueryVariables>(RetrieveUserByIdDocument, options);
        }
export type RetrieveUserByIdQueryHookResult = ReturnType<typeof useRetrieveUserByIdQuery>;
export type RetrieveUserByIdLazyQueryHookResult = ReturnType<typeof useRetrieveUserByIdLazyQuery>;
export type RetrieveUserByIdQueryResult = Apollo.QueryResult<RetrieveUserByIdQuery, RetrieveUserByIdQueryVariables>;
export function refetchRetrieveUserByIdQuery(variables?: RetrieveUserByIdQueryVariables) {
      return { query: RetrieveUserByIdDocument, variables: variables }
    }
export const RetrieveAllTodosDocument = gql`
    query retrieveAllTodos {
  retrieveAllTodos {
    id
    title
    done
    documentId
    isRemoved
    orderKey
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