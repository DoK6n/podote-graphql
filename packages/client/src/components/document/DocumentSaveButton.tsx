import { PurpleButton } from '../base';
import { DocumentId, TodoId } from '../../lib/types';
import { useHelpers } from '@remirror/react';
import { useEditDocumentContentMutation } from '../../lib/graphql/mutation/mutation.generated';
import styled from '@emotion/styled';
import {
  RetrieveAllRemovedDocumentsDocument,
  RetrieveAllRemovedTodoDocument,
  RetrieveAllTodosDocument,
} from '../../lib/graphql/query/query.generated';
import toast from 'react-hot-toast';

interface Props {
  id?: DocumentId;
}

function DocumentSaveButton({ id }: Props) {
  const { getJSON } = useHelpers();
  const [editDocumentContentMutation] = useEditDocumentContentMutation();

  const handleSave = async () => {
    if (!id) return;

    const { data } = await editDocumentContentMutation({
      variables: {
        data: {
          id,
          content: getJSON(),
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllTodosDocument,
        },
        {
          query: RetrieveAllRemovedTodoDocument,
        },
        {
          query: RetrieveAllRemovedDocumentsDocument,
        },
      ],
    });

    data?.editDocumentContent && toast.success('저장 하였습니다.', {
      style: {
        borderRadius: '10px',
        background: '#483d6b',
        color: '#efeef3'
      },
      iconTheme: {
        primary: '#9595d9',
        secondary: '#efeef3'
      }
    });

    !data?.editDocumentContent && toast.error('저장에 실패하였습니다.', {
      style: {
        borderRadius: '10px',
        background: '#a7546c',
        color: '#efeef3'
      },
      iconTheme: {
        primary: '#d46d85',
        secondary: '#efeef3'
      }
    })

  };

  return <Button onClick={handleSave}>저장</Button>;
}

const Button = styled(PurpleButton)`
  width: 4rem;
  height: 2.3rem;
  font-weight: 700;
  position: absolute;
  right: 3rem;
  top: 5.65rem;
  z-index: 2;
`;

export default DocumentSaveButton;
