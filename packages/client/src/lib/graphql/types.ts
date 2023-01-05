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
  todo?: Maybe<Todo>;
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
  deleteAllRemovedTodos?: Maybe<Array<Todo>>;
  deleteRemovedDocument?: Maybe<Document>;
  deleteRemovedTodo?: Maybe<Array<Todo>>;
  editDocumentContent?: Maybe<Document>;
  editTodoDone?: Maybe<Todo>;
  editTodoTitle?: Maybe<Todo>;
  register: User;
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
  login: UserWithSnsType;
  retrieveAllDocuments?: Maybe<Array<Document>>;
  retrieveAllRemovedDocuments?: Maybe<Array<Document>>;
  retrieveAllRemovedTodo?: Maybe<Array<Todo>>;
  retrieveAllTodos?: Maybe<Array<Todo>>;
  retrieveAllUsers?: Maybe<Array<User>>;
  retrieveDocument?: Maybe<Document>;
  retrieveRemovedDocument?: Maybe<Document>;
  retrieveRemovedTodo?: Maybe<Todo>;
  retrieveTodo?: Maybe<Todo>;
  snsType: SnsType;
};


export type QueryRetrieveDocumentArgs = {
  data: FindOneDocumentInput;
};


export type QueryRetrieveRemovedDocumentArgs = {
  data: FindOneDocumentInput;
};


export type QueryRetrieveRemovedTodoArgs = {
  data: TodoIdInput;
};


export type QueryRetrieveTodoArgs = {
  data: TodoIdInput;
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
  document?: Maybe<Document>;
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
  document: Document;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  snsTypeId: Scalars['Float'];
  todo: Todo;
};

export type UserWithSnsType = {
  __typename?: 'UserWithSnsType';
  document: Document;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  snsType: Scalars['String'];
  snsTypeId: Scalars['Float'];
  todo: Todo;
};
