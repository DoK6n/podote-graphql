export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type CreateDocumentInput = {
  content?: InputMaybe<Scalars['JSON']>;
  todoId: Scalars['String'];
};

export type CreateTodoInput = {
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  snsTypeName: Scalars['String'];
};

export type DeleteDocumentInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  content?: Maybe<Scalars['JSON']>;
  createdDt: Scalars['DateTime'];
  id: Scalars['String'];
  isRemoved: Scalars['Boolean'];
  removedDt?: Maybe<Scalars['DateTime']>;
  todo: Todo;
  todoId?: Maybe<Scalars['String']>;
  updatedDt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};

export type FindOneDocumentInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewDocument?: Maybe<Document>;
  addNewTodo?: Maybe<Todo>;
  addUser: User;
  deleteAllRemovedTodos?: Maybe<Array<Todo>>;
  deleteRemovedDocument?: Maybe<Document>;
  deleteRemovedTodo?: Maybe<Array<Todo>>;
  editDocumentContent?: Maybe<Document>;
  editTodoDone?: Maybe<Todo>;
  editTodoTitle?: Maybe<Todo>;
  removeDocument?: Maybe<Document>;
  removeTodo?: Maybe<Todo>;
  restoreDocument?: Maybe<Document>;
  restoreRemovedTodo?: Maybe<Todo>;
  switchTodoOrder: Array<Todo>;
};


export type MutationAddNewDocumentArgs = {
  data: CreateDocumentInput;
};


export type MutationAddNewTodoArgs = {
  data: CreateTodoInput;
};


export type MutationAddUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteRemovedDocumentArgs = {
  data: DeleteDocumentInput;
};


export type MutationDeleteRemovedTodoArgs = {
  data: TodoIdInput;
};


export type MutationEditDocumentContentArgs = {
  data: UpdateDocumentInput;
};


export type MutationEditTodoDoneArgs = {
  data: UpdateTodoDoneInput;
};


export type MutationEditTodoTitleArgs = {
  data: UpdateTodoTitleInput;
};


export type MutationRemoveDocumentArgs = {
  data: RemoveDocumentInput;
};


export type MutationRemoveTodoArgs = {
  data: TodoIdInput;
};


export type MutationRestoreDocumentArgs = {
  data: RestoreDocumentInput;
};


export type MutationRestoreRemovedTodoArgs = {
  data: TodoIdInput;
};


export type MutationSwitchTodoOrderArgs = {
  data: UpdateTodoOrderkeyInput;
};

export type Query = {
  __typename?: 'Query';
  retrieveAllRemovedTodo?: Maybe<Array<Todo>>;
  retrieveAllTodos?: Maybe<Array<Todo>>;
  retrieveAllUsers?: Maybe<Array<User>>;
  retrieveDocuement?: Maybe<Document>;
  retrieveRemovedDocument?: Maybe<Document>;
  retrieveRemovedTodo?: Maybe<Todo>;
  retrieveTodo?: Maybe<Todo>;
  retrieveUserById: UserWithSnsType;
  snsType: SnsType;
};


export type QueryRetrieveDocuementArgs = {
  data: FindOneDocumentInput;
};


export type QueryRetrieveRemovedDocumentArgs = {
  data: FindOneDocumentInput;
};


export type QueryRetrieveRemovedTodoArgs = {
  id: Scalars['String'];
};


export type QueryRetrieveTodoArgs = {
  id: Scalars['String'];
};


export type QuerySnsTypeArgs = {
  name: Scalars['String'];
};

export type RemoveDocumentInput = {
  id: Scalars['String'];
};

export type RestoreDocumentInput = {
  id: Scalars['String'];
};

export type SnsType = {
  __typename?: 'SnsType';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  createdDt: Scalars['DateTime'];
  document: Scalars['JSON'];
  documentId?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  editable: Scalars['Boolean'];
  id: Scalars['String'];
  isRemoved: Scalars['Boolean'];
  orderKey: Scalars['Float'];
  removedDt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedDt?: Maybe<Scalars['DateTime']>;
  user: User;
  userId: Scalars['String'];
};

export type TodoIdInput = {
  id: Scalars['String'];
};

export type TodoIdOrderKey = {
  id: Scalars['String'];
  orderKey: Scalars['Float'];
};

export type UpdateDocumentInput = {
  content?: InputMaybe<Scalars['JSON']>;
  id: Scalars['String'];
};

export type UpdateTodoDoneInput = {
  done: Scalars['Boolean'];
  id: Scalars['String'];
};

export type UpdateTodoOrderkeyInput = {
  TodoIdOrderKey: Array<TodoIdOrderKey>;
};

export type UpdateTodoTitleInput = {
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  documents: Scalars['JSON'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  snsTypeId: Scalars['Float'];
  todos: Scalars['JSON'];
};

export type UserWithSnsType = {
  __typename?: 'UserWithSnsType';
  documents: Scalars['JSON'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  snsType: Scalars['String'];
  snsTypeId: Scalars['Float'];
  todos: Scalars['JSON'];
};

export type AddUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', email: string, name: string, snsTypeId: number } };

export type AddNewTodoMutationVariables = Exact<{
  data: CreateTodoInput;
}>;


export type AddNewTodoMutation = { __typename?: 'Mutation', addNewTodo?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type EditTodoTitleMutationVariables = Exact<{
  data: UpdateTodoTitleInput;
}>;


export type EditTodoTitleMutation = { __typename?: 'Mutation', editTodoTitle?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type EditTodoDoneMutationVariables = Exact<{
  data: UpdateTodoDoneInput;
}>;


export type EditTodoDoneMutation = { __typename?: 'Mutation', editTodoDone?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type SwitchTodoOrderMutationVariables = Exact<{
  data: UpdateTodoOrderkeyInput;
}>;


export type SwitchTodoOrderMutation = { __typename?: 'Mutation', switchTodoOrder: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string }> };

export type RemoveTodoMutationVariables = Exact<{
  data: TodoIdInput;
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo?: { __typename?: 'Todo', id: string, title: string, done: boolean, orderKey: number, editable: boolean, documentId?: string | null, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null, userId: string } | null };

export type RestoreRemovedTodoMutationVariables = Exact<{
  data: TodoIdInput;
}>;


export type RestoreRemovedTodoMutation = { __typename?: 'Mutation', restoreRemovedTodo?: { __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null } | null };

export type DeleteRemovedTodoMutationVariables = Exact<{
  data: TodoIdInput;
}>;


export type DeleteRemovedTodoMutation = { __typename?: 'Mutation', deleteRemovedTodo?: Array<{ __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null }> | null };

export type DeleteAllRemovedTodosMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAllRemovedTodosMutation = { __typename?: 'Mutation', deleteAllRemovedTodos?: Array<{ __typename?: 'Todo', title: string, done: boolean, editable: boolean, isRemoved: boolean, removedDt?: any | null }> | null };

export type RetrieveAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type RetrieveAllTodosQuery = { __typename?: 'Query', retrieveAllTodos?: Array<{ __typename?: 'Todo', id: string, title: string, done: boolean, documentId?: string | null, isRemoved: boolean, orderKey: number }> | null };

export type RetrieveAllRemovedTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type RetrieveAllRemovedTodoQuery = { __typename?: 'Query', retrieveAllRemovedTodo?: Array<{ __typename?: 'Todo', id: string, documentId?: string | null, title: string, done: boolean, isRemoved: boolean, removedDt?: any | null }> | null };

export type RetrieveRemovedTodoQueryVariables = Exact<{ [key: string]: never; }>;


export type RetrieveRemovedTodoQuery = { __typename?: 'Query', retrieveRemovedTodo?: { __typename?: 'Todo', id: string, documentId?: string | null, title: string, done: boolean, isRemoved: boolean, removedDt?: any | null } | null };

export type RetrieveDocuementQueryVariables = Exact<{
  data: FindOneDocumentInput;
}>;


export type RetrieveDocuementQuery = { __typename?: 'Query', retrieveDocuement?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, userId: string, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null } | null };

export type RetrieveRemovedDocumentQueryVariables = Exact<{
  data: FindOneDocumentInput;
}>;


export type RetrieveRemovedDocumentQuery = { __typename?: 'Query', retrieveRemovedDocument?: { __typename?: 'Document', id: string, content?: any | null, todoId?: string | null, userId: string, createdDt: any, updatedDt?: any | null, isRemoved: boolean, removedDt?: any | null } | null };
