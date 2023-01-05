import { Todo, Document } from './graphql/types';

export type TodoId = Todo['id'] | Document['todoId'];
export type DocumentId = Todo['documentId'] | Document['id'];
