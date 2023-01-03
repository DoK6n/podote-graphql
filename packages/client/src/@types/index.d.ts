declare module 'podote/types' {
  import { Todo, Document } from '../lib/graphql/types';

  export type TodoId = Todo['id'] | Document['todoId'];
  export type DocumentId = Todo['documentId'] | Document['id'];
}
