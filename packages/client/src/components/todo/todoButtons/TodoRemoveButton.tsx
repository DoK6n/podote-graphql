import { useRemoveTodoMutation } from '../../../lib/graphql/mutation/mutation.generated';
import {
  RetrieveAllRemovedTodoDocument,
  RetrieveAllTodosDocument,
} from '../../../lib/graphql/query/query.generated';
import { IconButton } from '../../base';
import { Delete } from '../../vectors';

interface Props {
  id: string;
}

function TodoRemoveButton({ id }: Props) {
  const [removeTodoMutation] = useRemoveTodoMutation();

  const handleRemove = async () => {
    await removeTodoMutation({
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
          query: RetrieveAllTodosDocument,
        },
      ],
    });
  };

  return (
    <IconButton>
      <Delete onClick={handleRemove} size={20} />
    </IconButton>
  );
}

export default TodoRemoveButton;
