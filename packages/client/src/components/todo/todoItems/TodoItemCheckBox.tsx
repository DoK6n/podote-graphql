import { useEditTodoDoneMutation } from '../../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../../lib/graphql/query/query.generated';
import { IconButton } from '../../base';
import { Checked, Unchecked } from '../../vectors';

interface Props {
  id: string;
  isDone: boolean;
}

function TodoItemCheckBox({ id, isDone }: Props) {
  const [editTodoDoneMutation] = useEditTodoDoneMutation();

  const handleDone = async () => {
    await editTodoDoneMutation({
      variables: {
        data: {
          id,
          done: !isDone,
        },
      },
      refetchQueries: [
        {
          query: RetrieveAllTodosDocument,
        },
      ],
    });
  };

  return (
    <IconButton onClick={handleDone}>
      {isDone ? <Checked /> : <Unchecked />}
    </IconButton>
  );
}

export default TodoItemCheckBox;
