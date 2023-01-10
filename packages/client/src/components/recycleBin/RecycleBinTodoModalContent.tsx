import styled from '@emotion/styled';
import {
  useDeleteAllRemovedTodosMutation,
  useDeleteRemovedDocumentMutation,
  useDeleteRemovedTodoMutation,
  useRestoreRemovedTodoMutation,
} from '../../lib/graphql/mutation/mutation.generated';
import {
  RetrieveAllRemovedDocumentsDocument,
  RetrieveAllRemovedTodoDocument,
  RetrieveAllTodosDocument,
  useRetrieveRemovedDocumentQuery,
} from '../../lib/graphql/query/query.generated';
import { randomNumber } from '../../lib/randomNumber';
import { useModalStore } from '../../lib/store/modal';
import { RoundButton } from '../base';
import { PreviewCard } from '../document';
import Preview from '../document/preview/Preview';

interface Props {}

function RecycleBinTodoModalContent({}: Props) {
  const { modalState, modalClose } = useModalStore();
  const [deleteRemovedTodoMutation] = useDeleteRemovedTodoMutation();
  const [deleteRemovedDocumentMutation] = useDeleteRemovedDocumentMutation();
  const [deleteAllRemovedTodosMutation] = useDeleteAllRemovedTodosMutation();
  const [restoreRemovedTodoMutation] = useRestoreRemovedTodoMutation();

  let removedDocument;
  if (modalState.documentId) {
    removedDocument = useRetrieveRemovedDocumentQuery({
      variables: {
        data: {
          id: modalState.documentId,
        },
      },
    });
  }

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
        // {
        //   query: RetrieveAllTodosDocument,
        // },
      ],
    });
    modalClose();
  };

  const handleTodoRestore = async () => {
    if (!modalState.todoId) return;

    const id = modalState.todoId;

    await restoreRemovedTodoMutation({
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

  const handleTodoDelete = async () => {
    if (!modalState.todoId) return;

    const id = modalState.todoId;

    await deleteRemovedTodoMutation({
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
        // {
        //   query: RetrieveAllTodosDocument,
        // },
      ],
    });
    modalClose();
  };

  const handleAllDelete = async () => {
    await deleteAllRemovedTodosMutation({
      refetchQueries: [
        {
          query: RetrieveAllRemovedTodoDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
        // {
        //   query: RetrieveAllTodosDocument,
        // },
      ],
    });
    modalClose();
  };

  return (
    <>
      {modalState.documentId && removedDocument?.data?.retrieveRemovedDocument && (
        <>
          <PreviewCard small={true}>
            <Preview
              documentContent={
                removedDocument.data.retrieveRemovedDocument.content
              }
            />
          </PreviewCard>
          <RoundButton delay={randomNumber()} onClick={handleDocumentDelete}>
            <p>문서 영구삭제</p>
          </RoundButton>
        </>
      )}

      <RoundButton delay={randomNumber()} onClick={handleTodoRestore}>
        <p>할일 복원</p>
      </RoundButton>
      <RoundButton delay={randomNumber()} onClick={handleTodoDelete}>
        <p>할일 영구삭제</p>
      </RoundButton>
      <RoundButton delay={randomNumber()} onClick={handleAllDelete}>
        <p>휴지통 비우기</p>
      </RoundButton>
    </>
  );
}

export default RecycleBinTodoModalContent;
