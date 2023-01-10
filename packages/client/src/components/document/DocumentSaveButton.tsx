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

interface Props {
  id?: DocumentId;
}

function DocumentSaveButton({ id }: Props) {
  const { getJSON } = useHelpers();
  const [editDocumentContentMutation] = useEditDocumentContentMutation();

  const handleSave = async () => {
    if (!id) return;

    await editDocumentContentMutation({
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
`;

export default DocumentSaveButton;
