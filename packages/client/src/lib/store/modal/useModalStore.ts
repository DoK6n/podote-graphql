import create from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { Todo } from '../../graphql/types';

interface SelectedTodoState<T = never> {
  todoId: Todo['id'] | T;
  documentId: Todo['documentId'];
}

interface ModalState extends SelectedTodoState<null> {
  isModalOpen: boolean;
}

interface ModalStore {
  modalState: ModalState;
  modalOpen: ({ todoId, documentId }: SelectedTodoState) => void;
  modalClose: () => void;
}

const initialModalState: ModalState = {
  todoId: null,
  documentId: null,
  isModalOpen: false,
};

export const useModalStore = create<ModalStore>()(
  devtools(
    subscribeWithSelector((set, get) => ({
      modalState: initialModalState,
      modalOpen: ({ todoId, documentId }) =>
        set(() => ({
          modalState: {
            todoId,
            documentId,
            isModalOpen: true,
          },
        })),
      modalClose: () =>
        set(() => ({
          modalState: {
            todoId: null,
            documentId: null,
            isModalOpen: false,
          },
        })),
    })),
  ),
);

useModalStore.subscribe(
  (state) => state,
  (previousSelectedState) =>
    console.log('[subscribe]모달 상태 ➜', previousSelectedState.modalState),
);
