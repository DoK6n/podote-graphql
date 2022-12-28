import { CloudDone } from '../vectors';
import { IconButton } from '../base';
import { useTodoClientCache } from '../../hooks';
import { useEditTodoTitleMutation } from '../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../lib/graphql/query/query.generated';

interface Props {
  id: string;
  title?: string;
}

function TodoSaveButton({ id, title }: Props) {
  const { setUnEditable } = useTodoClientCache();
  const [editTodoTitleMutation] = useEditTodoTitleMutation();

  const handleSave = async () => {
    await editTodoTitleMutation({
      variables: {
        data: {
          id,
          title: title ? title : 'untitled',
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllTodosDocument,
        },
      ],
    });
    setUnEditable(id);
  };

  return (
    <IconButton onClick={handleSave}>
      <CloudDone size={18} />
    </IconButton>
  );
}

export default TodoSaveButton;
