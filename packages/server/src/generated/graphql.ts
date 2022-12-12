import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateDocumentInput: CreateDocumentInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteDocumentInput: DeleteDocumentInput;
  Document: ResolverTypeWrapper<Document>;
  FindOneDocumentInput: FindOneDocumentInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RemoveDocumentInput: RemoveDocumentInput;
  RestoreDocumentInput: RestoreDocumentInput;
  SnsType: ResolverTypeWrapper<SnsType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoIdInput: TodoIdInput;
  TodoIdOrderKey: TodoIdOrderKey;
  UpdateDocumentInput: UpdateDocumentInput;
  UpdateTodoDoneInput: UpdateTodoDoneInput;
  UpdateTodoOrderkeyInput: UpdateTodoOrderkeyInput;
  UpdateTodoTitleInput: UpdateTodoTitleInput;
  User: ResolverTypeWrapper<User>;
  UserWithSnsType: ResolverTypeWrapper<UserWithSnsType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateDocumentInput: CreateDocumentInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  DateTime: Scalars['DateTime'];
  DeleteDocumentInput: DeleteDocumentInput;
  Document: Document;
  FindOneDocumentInput: FindOneDocumentInput;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Query: {};
  RemoveDocumentInput: RemoveDocumentInput;
  RestoreDocumentInput: RestoreDocumentInput;
  SnsType: SnsType;
  String: Scalars['String'];
  Todo: Todo;
  TodoIdInput: TodoIdInput;
  TodoIdOrderKey: TodoIdOrderKey;
  UpdateDocumentInput: UpdateDocumentInput;
  UpdateTodoDoneInput: UpdateTodoDoneInput;
  UpdateTodoOrderkeyInput: UpdateTodoOrderkeyInput;
  UpdateTodoTitleInput: UpdateTodoTitleInput;
  User: User;
  UserWithSnsType: UserWithSnsType;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  content?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  createdDt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  removedDt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  todo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  todoId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addNewDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationAddNewDocumentArgs, 'data'>>;
  addNewTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationAddNewTodoArgs, 'data'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'data'>>;
  deleteAllRemovedTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType>;
  deleteRemovedDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationDeleteRemovedDocumentArgs, 'data'>>;
  deleteRemovedTodo?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, RequireFields<MutationDeleteRemovedTodoArgs, 'data'>>;
  editDocumentContent?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationEditDocumentContentArgs, 'data'>>;
  editTodoDone?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationEditTodoDoneArgs, 'data'>>;
  editTodoTitle?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationEditTodoTitleArgs, 'data'>>;
  removeDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationRemoveDocumentArgs, 'data'>>;
  removeTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationRemoveTodoArgs, 'data'>>;
  restoreDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationRestoreDocumentArgs, 'data'>>;
  restoreRemovedTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationRestoreRemovedTodoArgs, 'data'>>;
  switchTodoOrder?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationSwitchTodoOrderArgs, 'data'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  retrieveAllRemovedTodo?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType>;
  retrieveAllTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType>;
  retrieveAllUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  retrieveDocuement?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryRetrieveDocuementArgs, 'data'>>;
  retrieveRemovedDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryRetrieveRemovedDocumentArgs, 'data'>>;
  retrieveRemovedTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryRetrieveRemovedTodoArgs, 'id'>>;
  retrieveTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryRetrieveTodoArgs, 'id'>>;
  retrieveUserById?: Resolver<ResolversTypes['UserWithSnsType'], ParentType, ContextType>;
  snsType?: Resolver<ResolversTypes['SnsType'], ParentType, ContextType, RequireFields<QuerySnsTypeArgs, 'name'>>;
};

export type SnsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnsType'] = ResolversParentTypes['SnsType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  createdDt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  document?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  documentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  editable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRemoved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  removedDt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  documents?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  snsTypeId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  todos?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithSnsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithSnsType'] = ResolversParentTypes['UserWithSnsType']> = {
  documents?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  snsType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  snsTypeId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  todos?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Document?: DocumentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SnsType?: SnsTypeResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserWithSnsType?: UserWithSnsTypeResolvers<ContextType>;
};

