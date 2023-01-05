import {
  useDeleteAllRemovedDocumentsMutation,
  useDeleteRemovedDocumentMutation,
  useRestoreRemovedDocumentMutation,
} from '../../lib/graphql/mutation/mutation.generated';
import {
  RetrieveAllRemovedDocumentsDocument,
  RetrieveAllRemovedTodoDocument,
  RetrieveAllTodosDocument,
} from '../../lib/graphql/query/query.generated';
import { randomNumber } from '../../lib/randomNumber';
import { useModalStore } from '../../lib/store/modal';
import { RoundButton } from '../base';

interface Props {}

function RecycleBinDocumentModalContent({}: Props) {
  const { modalState, modalClose } = useModalStore();
  const [deleteAllRemovedDocumentsMutation] =
    useDeleteAllRemovedDocumentsMutation();
  const [deleteRemovedDocumentMutation] = useDeleteRemovedDocumentMutation();
  const [restoreRemovedDocumentMutation] = useRestoreRemovedDocumentMutation();

  const handleDocumentRestore = async () => {
    if (!modalState.documentId) return;

    const id = modalState.documentId;

    await restoreRemovedDocumentMutation({
      variables: {
        data: {
          id,
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllRemovedTodoDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
        {
          query: RetrieveAllTodosDocument,
        },
      ],
    });
    modalClose();
  };

  const handleDocumentDelete = async () => {
    if (!modalState.documentId) return;

    const id = modalState.documentId;

    await deleteRemovedDocumentMutation({
      variables: {
        data: {
          id,
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllRemovedTodoDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
      ],
    });
    modalClose();
  };

  const handleAllDelete = async () => {
    modalClose();

    await deleteAllRemovedDocumentsMutation({
      refetchQueries: [
        {
          query: RetrieveAllRemovedTodoDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
      ],
    });
  };

  return (
    <>
      <RoundButton
        delay={randomNumber()}
        onClick={handleDocumentRestore}
        disabled={modalState.todoId ? true : false}
      >
        <p>문서 복원</p>
      </RoundButton>
      <RoundButton delay={randomNumber()} onClick={handleDocumentDelete}>
        <p>영구 삭제</p>
      </RoundButton>
      <RoundButton delay={randomNumber()} onClick={handleAllDelete}>
        <p>휴지통 비우기</p>
      </RoundButton>
    </>
  );
}

export default RecycleBinDocumentModalContent;
