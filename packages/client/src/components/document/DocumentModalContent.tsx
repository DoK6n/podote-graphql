import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useGoBack } from '../../hooks';
import { useRemoveDocumentMutation } from '../../lib/graphql/mutation/mutation.generated';
import {
  RetrieveAllRemovedDocumentsDocument,
  RetrieveAllTodosDocument,
  useRetrieveDocumentQuery,
} from '../../lib/graphql/query/query.generated';
import { randomNumber } from '../../lib/randomNumber';
import { useModalStore } from '../../lib/store/modal';
import { RoundButton } from '../base';

function DocumentModalContent() {
  const { modalState, modalClose } = useModalStore();
  const navigate = useNavigate();

  const { data, loading, error } = useRetrieveDocumentQuery({
    variables: {
      data: {
        id: modalState.documentId!,
      },
    },
  });

  const [removeDocumentMutation] = useRemoveDocumentMutation();

  const handleDocumentRemove = async () => {
    await removeDocumentMutation({
      variables: {
        data: {
          id: modalState.documentId!,
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllTodosDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
      ],
    });
    modalClose();
    navigate('/todo');
  };

  const createdDt = dayjs(data?.retrieveDocument?.createdDt).format(
    'YYYY-MM-DD HH:mm:ss',
  );
  const updatedDt = dayjs(data?.retrieveDocument?.updatedDt).format(
    'YYYY-MM-DD HH:mm:ss',
  );

  return (
    <>
      <div>
        <h2>문서 생성일</h2> {createdDt}
        <h2>최근 수정일</h2> {updatedDt}
      </div>
      {modalState.documentId && (
        <RoundButton delay={randomNumber()} onClick={handleDocumentRemove}>
          <p>문서 지우기</p>
        </RoundButton>
      )}
    </>
  );
}

export default DocumentModalContent;
