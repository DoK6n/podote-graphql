import { NoteAdd } from '../../vectors';
import { IconButton } from '../../base';
import { useAddNewDocumentMutation } from '../../../lib/graphql/mutation/mutation.generated';
import {
  RetrieveAllTodosDocument,
  // RetrieveDocumentDocument
} from '../../../lib/graphql/query/query.generated';
import { useNavigate } from 'react-router-dom';

interface Props {
  todoId: string;
}

const emptyDocument = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: {
        nodeIndent: null,
        nodeTextAlignment: null,
        nodeLineHeight: null,
        style: '',
      },
    },
  ],
};

function AddTodoDocumentButton({ todoId }: Props) {
  const [addNewDocument] = useAddNewDocumentMutation();
  const navigate = useNavigate();

  const handleSave = async () => {
    const { data, errors } = await addNewDocument({
      variables: {
        data: {
          todoId,
          content: emptyDocument,
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllTodosDocument,
        },
      ],
    });

    if (!data) return;
    const newDocument = data.addNewDocument;
    if (!newDocument) return;

    navigate(`/docs/${newDocument.id}`);
  };

  return (
    <IconButton onClick={handleSave}>
      <NoteAdd size={18} />
    </IconButton>
  );
}

export default AddTodoDocumentButton;
