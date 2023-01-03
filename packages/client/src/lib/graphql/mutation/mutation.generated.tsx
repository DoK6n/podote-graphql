import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RegisterMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', email: string, name: string, snsTypeId: number } };

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


export type RestoreRemovedTodoMutation = { __typename?: 'Mutation', restoreRemovedTodo?: { __typename?: 'Todo', id: string, title: string, done: boolean, editable: boolean, documentId?: string | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type DeleteRemovedTodoMutationVariables = Types.Exact<{
  data: Types.TodoIdInput;
}>;


export type DeleteRemovedTodoMutation = { __typename?: 'Mutation', deleteRemovedTodo?: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, editable: boolean, documentId?: string | null, isRemoved: boolean, removedDt?: any | null, userId: string }> | null };

export type DeleteAllRemovedTodosMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type DeleteAllRemovedTodosMutation = { __typename?: 'Mutation', deleteAllRemovedTodos?: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, editable: boolean, documentId?: string | null, isRemoved: boolean, removedDt?: any | null, userId: string }> | null };

export type AddNewDocumentMutationVariables = Types.Exact<{
  data: Types.CreateDocumentInput;
}>;


export type AddNewDocumentMutation = { __typename?: 'Mutation', addNewDocument?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type EditDocumentContentMutationVariables = Types.Exact<{
  data: Types.UpdateDocumentInput;
}>;


export type EditDocumentContentMutation = { __typename?: 'Mutation', editDocumentContent?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, userId: string } | null };

export type RemoveDocumentMutationVariables = Types.Exact<{
  data: Types.RemoveDocumentInput;
}>;


export type RemoveDocumentMutation = { __typename?: 'Mutation', removeDocument?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type RestoreDocumentMutationVariables = Types.Exact<{
  data: Types.RestoreDocumentInput;
}>;


export type RestoreDocumentMutation = { __typename?: 'Mutation', restoreDocument?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type DeleteRemovedDocumentMutationVariables = Types.Exact<{
  data: Types.DeleteDocumentInput;
}>;


export type DeleteRemovedDocumentMutation = { __typename?: 'Mutation', deleteRemovedDocument?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };


export const RegisterDocument = gql`
    mutation register {
  register {
    email
    name
    snsTypeId
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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
    id
    title
    done
    editable
    documentId
    isRemoved
    removedDt
    userId
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
    id
    title
    done
    editable
    documentId
    isRemoved
    removedDt
    userId
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
    id
    title
    done
    editable
    documentId
    isRemoved
    removedDt
    userId
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
export const AddNewDocumentDocument = gql`
    mutation addNewDocument($data: CreateDocumentInput!) {
  addNewDocument(data: $data) {
    id
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type AddNewDocumentMutationFn = Apollo.MutationFunction<AddNewDocumentMutation, AddNewDocumentMutationVariables>;

/**
 * __useAddNewDocumentMutation__
 *
 * To run a mutation, you first call `useAddNewDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewDocumentMutation, { data, loading, error }] = useAddNewDocumentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddNewDocumentMutation(baseOptions?: Apollo.MutationHookOptions<AddNewDocumentMutation, AddNewDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewDocumentMutation, AddNewDocumentMutationVariables>(AddNewDocumentDocument, options);
      }
export type AddNewDocumentMutationHookResult = ReturnType<typeof useAddNewDocumentMutation>;
export type AddNewDocumentMutationResult = Apollo.MutationResult<AddNewDocumentMutation>;
export type AddNewDocumentMutationOptions = Apollo.BaseMutationOptions<AddNewDocumentMutation, AddNewDocumentMutationVariables>;
export const EditDocumentContentDocument = gql`
    mutation editDocumentContent($data: UpdateDocumentInput!) {
  editDocumentContent(data: $data) {
    id
    content
    todoId
    userId
  }
}
    `;
export type EditDocumentContentMutationFn = Apollo.MutationFunction<EditDocumentContentMutation, EditDocumentContentMutationVariables>;

/**
 * __useEditDocumentContentMutation__
 *
 * To run a mutation, you first call `useEditDocumentContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDocumentContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDocumentContentMutation, { data, loading, error }] = useEditDocumentContentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditDocumentContentMutation(baseOptions?: Apollo.MutationHookOptions<EditDocumentContentMutation, EditDocumentContentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDocumentContentMutation, EditDocumentContentMutationVariables>(EditDocumentContentDocument, options);
      }
export type EditDocumentContentMutationHookResult = ReturnType<typeof useEditDocumentContentMutation>;
export type EditDocumentContentMutationResult = Apollo.MutationResult<EditDocumentContentMutation>;
export type EditDocumentContentMutationOptions = Apollo.BaseMutationOptions<EditDocumentContentMutation, EditDocumentContentMutationVariables>;
export const RemoveDocumentDocument = gql`
    mutation removeDocument($data: RemoveDocumentInput!) {
  removeDocument(data: $data) {
    id
    content
    todoId
    isRemoved
    removedDt
    userId
  }
}
    `;
export type RemoveDocumentMutationFn = Apollo.MutationFunction<RemoveDocumentMutation, RemoveDocumentMutationVariables>;

/**
 * __useRemoveDocumentMutation__
 *
 * To run a mutation, you first call `useRemoveDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDocumentMutation, { data, loading, error }] = useRemoveDocumentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveDocumentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDocumentMutation, RemoveDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDocumentMutation, RemoveDocumentMutationVariables>(RemoveDocumentDocument, options);
      }
export type RemoveDocumentMutationHookResult = ReturnType<typeof useRemoveDocumentMutation>;
export type RemoveDocumentMutationResult = Apollo.MutationResult<RemoveDocumentMutation>;
export type RemoveDocumentMutationOptions = Apollo.BaseMutationOptions<RemoveDocumentMutation, RemoveDocumentMutationVariables>;
export const RestoreDocumentDocument = gql`
    mutation restoreDocument($data: RestoreDocumentInput!) {
  restoreDocument(data: $data) {
    id
    content
    todoId
    createdDt
    updatedDt
    isRemoved
    removedDt
    userId
  }
}
    `;
export type RestoreDocumentMutationFn = Apollo.MutationFunction<RestoreDocumentMutation, RestoreDocumentMutationVariables>;

/**
 * __useRestoreDocumentMutation__
 *
 * To run a mutation, you first call `useRestoreDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreDocumentMutation, { data, loading, error }] = useRestoreDocumentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRestoreDocumentMutation(baseOptions?: Apollo.MutationHookOptions<RestoreDocumentMutation, RestoreDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestoreDocumentMutation, RestoreDocumentMutationVariables>(RestoreDocumentDocument, options);
      }
export type RestoreDocumentMutationHookResult = ReturnType<typeof useRestoreDocumentMutation>;
export type RestoreDocumentMutationResult = Apollo.MutationResult<RestoreDocumentMutation>;
export type RestoreDocumentMutationOptions = Apollo.BaseMutationOptions<RestoreDocumentMutation, RestoreDocumentMutationVariables>;
export const DeleteRemovedDocumentDocument = gql`
    mutation deleteRemovedDocument($data: DeleteDocumentInput!) {
  deleteRemovedDocument(data: $data) {
    id
    content
    todoId
    isRemoved
    removedDt
    userId
  }
}
    `;
export type DeleteRemovedDocumentMutationFn = Apollo.MutationFunction<DeleteRemovedDocumentMutation, DeleteRemovedDocumentMutationVariables>;

/**
 * __useDeleteRemovedDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteRemovedDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRemovedDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRemovedDocumentMutation, { data, loading, error }] = useDeleteRemovedDocumentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteRemovedDocumentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRemovedDocumentMutation, DeleteRemovedDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRemovedDocumentMutation, DeleteRemovedDocumentMutationVariables>(DeleteRemovedDocumentDocument, options);
      }
export type DeleteRemovedDocumentMutationHookResult = ReturnType<typeof useDeleteRemovedDocumentMutation>;
export type DeleteRemovedDocumentMutationResult = Apollo.MutationResult<DeleteRemovedDocumentMutation>;
export type DeleteRemovedDocumentMutationOptions = Apollo.BaseMutationOptions<DeleteRemovedDocumentMutation, DeleteRemovedDocumentMutationVariables>;