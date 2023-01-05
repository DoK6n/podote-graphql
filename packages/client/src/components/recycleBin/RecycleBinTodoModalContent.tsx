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
import { colors } from '../../styles/colors';
import { scrollbarStyle } from '../../styles/scrollbar';
import { Card, RoundButton } from '../base';

interface Props {}

function RecycleBinTodoModalContent({}: Props) {
  const { modalState, modalClose } = useModalStore();
  const [deleteRemovedTodoMutation] = useDeleteRemovedTodoMutation();
  const [deleteRemovedDocumentMutation] = useDeleteRemovedDocumentMutation();
  const [deleteAllRemovedTodosMutation] = useDeleteAllRemovedTodosMutation();
  const [restoreRemovedTodoMutation] = useRestoreRemovedTodoMutation();

  const removedDocument = useRetrieveRemovedDocumentQuery({
    variables: {
      data: {
        id: modalState.documentId!,
      },
    },
  });

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
      {modalState.documentId &&
        removedDocument.data &&
        removedDocument.data.retrieveRemovedDocument && (
          <>
            <PreviewDocsCard>
              <DocsContent>
                {JSON.stringify(
                  removedDocument.data.retrieveRemovedDocument.content,
                )}
              </DocsContent>
            </PreviewDocsCard>
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

const PreviewDocsCard = styled(Card)`
  border: 1px solid white;
  height: 200px;
  width: 140px;
  background-color: ${colors.purple4};
  ${scrollbarStyle}
`;

const DocsContent = styled.div`
  overflow: hidden;
  word-wrap: break-word;
  font-size: 13px;
  line-height: 1.6;
`;

export default RecycleBinTodoModalContent;
