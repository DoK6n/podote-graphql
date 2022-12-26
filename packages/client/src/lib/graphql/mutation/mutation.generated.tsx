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