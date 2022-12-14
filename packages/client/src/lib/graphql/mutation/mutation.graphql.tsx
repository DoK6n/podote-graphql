import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddUserMutationVariables = Types.Exact<{
  data: Types.CreateUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', email: string, name: string, snsTypeId: number } };

export type AddNewTodoMutationVariables = Types.Exact<{
  data: Types.CreateTodoInput;
}>;


export type AddNewTodoMutation = { __typename?: 'Mutation', addNewTodo?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type EditTodoTitleMutationVariables = Types.Exact<{
  data: Types.UpdateTodoTitleInput;
}>;


export type EditTodoTitleMutation = { __typename?: 'Mutation', editTodoTitle?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type EditTodoDoneMutationVariables = Types.Exact<{
  data: Types.UpdateTodoDoneInput;
}>;


export type EditTodoDoneMutation = { __typename?: 'Mutation', editTodoDone?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type SwitchTodoOrderMutationVariables = Types.Exact<{
  data: Types.UpdateTodoOrderkeyInput;
}>;


export type SwitchTodoOrderMutation = { __typename?: 'Mutation', switchTodoOrder: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string }> };

export type RemoveTodoMutationVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, documentId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type RestoreRemovedTodoMutationVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type RestoreRemovedTodoMutation = { __typename?: 'Mutation', restoreRemovedTodo?: { __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null } | null };

export type DeleteRemovedTodoMutationVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type DeleteRemovedTodoMutation = { __typename?: 'Mutation', deleteRemovedTodo?: Array<{ __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null }> | null };

export type DeleteAllRemovedTodosMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type DeleteAllRemovedTodosMutation = { __typename?: 'Mutation', deleteAllRemovedTodos?: Array<{ __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null }> | null };


export const AddUserDocument = gql`
    mutation addUser($data: CreateUserInput!) {
  addUser(data: $data) {
    email
    name
    snsTypeId
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const AddNewTodoDocument = gql`
    mutation addNewTodo($data: CreateTodoInput!) {
  addNewTodo(data: $data) {
    id
    title
    done
    orderKey
    editable
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type AddNewTodoMutationFn = Apollo.MutationFunction<AddNewTodoMutation, AddNewTodoMutationVariables>;

/**
 * __useAddNewTodoMutation__
 *
 * To run a mutation, you first call `useAddNewTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewTodoMutation, { data, loading, error }] = useAddNewTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddNewTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddNewTodoMutation, AddNewTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewTodoMutation, AddNewTodoMutationVariables>(AddNewTodoDocument, options);
      }
export type AddNewTodoMutationHookResult = ReturnType<typeof useAddNewTodoMutation>;
export type AddNewTodoMutationResult = Apollo.MutationResult<AddNewTodoMutation>;
export type AddNewTodoMutationOptions = Apollo.BaseMutationOptions<AddNewTodoMutation, AddNewTodoMutationVariables>;
export const EditTodoTitleDocument = gql`
    mutation editTodoTitle($data: UpdateTodoTitleInput!) {
  editTodoTitle(data: $data) {
    id
    title
    done
    orderKey
    editable
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type EditTodoTitleMutationFn = Apollo.MutationFunction<EditTodoTitleMutation, EditTodoTitleMutationVariables>;

/**
 * __useEditTodoTitleMutation__
 *
 * To run a mutation, you first call `useEditTodoTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoTitleMutation, { data, loading, error }] = useEditTodoTitleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditTodoTitleMutation(baseOptions?: Apollo.MutationHookOptions<EditTodoTitleMutation, EditTodoTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTodoTitleMutation, EditTodoTitleMutationVariables>(EditTodoTitleDocument, options);
      }
export type EditTodoTitleMutationHookResult = ReturnType<typeof useEditTodoTitleMutation>;
export type EditTodoTitleMutationResult = Apollo.MutationResult<EditTodoTitleMutation>;
export type EditTodoTitleMutationOptions = Apollo.BaseMutationOptions<EditTodoTitleMutation, EditTodoTitleMutationVariables>;
export const EditTodoDoneDocument = gql`
    mutation editTodoDone($data: UpdateTodoDoneInput!) {
  editTodoDone(data: $data) {
    id
    title
    done
    orderKey
    editable
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type EditTodoDoneMutationFn = Apollo.MutationFunction<EditTodoDoneMutation, EditTodoDoneMutationVariables>;

/**
 * __useEditTodoDoneMutation__
 *
 * To run a mutation, you first call `useEditTodoDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoDoneMutation, { data, loading, error }] = useEditTodoDoneMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditTodoDoneMutation(baseOptions?: Apollo.MutationHookOptions<EditTodoDoneMutation, EditTodoDoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTodoDoneMutation, EditTodoDoneMutationVariables>(EditTodoDoneDocument, options);
      }
export type EditTodoDoneMutationHookResult = ReturnType<typeof useEditTodoDoneMutation>;
export type EditTodoDoneMutationResult = Apollo.MutationResult<EditTodoDoneMutation>;
export type EditTodoDoneMutationOptions = Apollo.BaseMutationOptions<EditTodoDoneMutation, EditTodoDoneMutationVariables>;
export const SwitchTodoOrderDocument = gql`
    mutation switchTodoOrder($data: UpdateTodoOrderkeyInput!) {
  switchTodoOrder(data: $data) {
    id
    title
    done
    orderKey
    editable
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type SwitchTodoOrderMutationFn = Apollo.MutationFunction<SwitchTodoOrderMutation, SwitchTodoOrderMutationVariables>;

/**
 * __useSwitchTodoOrderMutation__
 *
 * To run a mutation, you first call `useSwitchTodoOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwitchTodoOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [switchTodoOrderMutation, { data, loading, error }] = useSwitchTodoOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSwitchTodoOrderMutation(baseOptions?: Apollo.MutationHookOptions<SwitchTodoOrderMutation, SwitchTodoOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SwitchTodoOrderMutation, SwitchTodoOrderMutationVariables>(SwitchTodoOrderDocument, options);
      }
export type SwitchTodoOrderMutationHookResult = ReturnType<typeof useSwitchTodoOrderMutation>;
export type SwitchTodoOrderMutationResult = Apollo.MutationResult<SwitchTodoOrderMutation>;
export type SwitchTodoOrderMutationOptions = Apollo.BaseMutationOptions<SwitchTodoOrderMutation, SwitchTodoOrderMutationVariables>;
export const RemoveTodoDocument = gql`
    mutation removeTodo($data: TodoIdInput!) {
  removeTodo(data: $data) {
    id
    title
    done
    orderKey
    editable
    documentId
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type RemoveTodoMutationFn = Apollo.MutationFunction<RemoveTodoMutation, RemoveTodoMutationVariables>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveTodoMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTodoMutation, RemoveTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(RemoveTodoDocument, options);
      }
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<RemoveTodoMutation, RemoveTodoMutationVariables>;
export const RestoreRemovedTodoDocument = gql`
    mutation restoreRemovedTodo($data: TodoIdInput!) {
  restoreRemovedTodo(data: $data) {
    title
    done
    editable
    isRemoved
    removedDt
  }
}
    `;
export type RestoreRemovedTodoMutationFn = Apollo.MutationFunction<RestoreRemovedTodoMutation, RestoreRemovedTodoMutationVariables>;

/**
 * __useRestoreRemovedTodoMutation__
 *
 * To run a mutation, you first call `useRestoreRemovedTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreRemovedTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreRemovedTodoMutation, { data, loading, error }] = useRestoreRemovedTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRestoreRemovedTodoMutation(baseOptions?: Apollo.MutationHookOptions<RestoreRemovedTodoMutation, RestoreRemovedTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestoreRemovedTodoMutation, RestoreRemovedTodoMutationVariables>(RestoreRemovedTodoDocument, options);
      }
export type RestoreRemovedTodoMutationHookResult = ReturnType<typeof useRestoreRemovedTodoMutation>;
export type RestoreRemovedTodoMutationResult = Apollo.MutationResult<RestoreRemovedTodoMutation>;
export type RestoreRemovedTodoMutationOptions = Apollo.BaseMutationOptions<RestoreRemovedTodoMutation, RestoreRemovedTodoMutationVariables>;
export const DeleteRemovedTodoDocument = gql`
    mutation deleteRemovedTodo($data: TodoIdInput!) {
  deleteRemovedTodo(data: $data) {
    title
    done
    editable
    isRemoved
    removedDt
  }
}
    `;
export type DeleteRemovedTodoMutationFn = Apollo.MutationFunction<DeleteRemovedTodoMutation, DeleteRemovedTodoMutationVariables>;

/**
 * __useDeleteRemovedTodoMutation__
 *
 * To run a mutation, you first call `useDeleteRemovedTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRemovedTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRemovedTodoMutation, { data, loading, error }] = useDeleteRemovedTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteRemovedTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRemovedTodoMutation, DeleteRemovedTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRemovedTodoMutation, DeleteRemovedTodoMutationVariables>(DeleteRemovedTodoDocument, options);
      }
export type DeleteRemovedTodoMutationHookResult = ReturnType<typeof useDeleteRemovedTodoMutation>;
export type DeleteRemovedTodoMutationResult = Apollo.MutationResult<DeleteRemovedTodoMutation>;
export type DeleteRemovedTodoMutationOptions = Apollo.BaseMutationOptions<DeleteRemovedTodoMutation, DeleteRemovedTodoMutationVariables>;
export const DeleteAllRemovedTodosDocument = gql`
    mutation deleteAllRemovedTodos {
  deleteAllRemovedTodos {
    title
    done
    editable
    isRemoved
    removedDt
  }
}
    `;
export type DeleteAllRemovedTodosMutationFn = Apollo.MutationFunction<DeleteAllRemovedTodosMutation, DeleteAllRemovedTodosMutationVariables>;

/**
 * __useDeleteAllRemovedTodosMutation__
 *
 * To run a mutation, you first call `useDeleteAllRemovedTodosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllRemovedTodosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllRemovedTodosMutation, { data, loading, error }] = useDeleteAllRemovedTodosMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAllRemovedTodosMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAllRemovedTodosMutation, DeleteAllRemovedTodosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAllRemovedTodosMutation, DeleteAllRemovedTodosMutationVariables>(DeleteAllRemovedTodosDocument, options);
      }
export type DeleteAllRemovedTodosMutationHookResult = ReturnType<typeof useDeleteAllRemovedTodosMutation>;
export type DeleteAllRemovedTodosMutationResult = Apollo.MutationResult<DeleteAllRemovedTodosMutation>;
export type DeleteAllRemovedTodosMutationOptions = Apollo.BaseMutationOptions<DeleteAllRemovedTodosMutation, DeleteAllRemovedTodosMutationVariables>;