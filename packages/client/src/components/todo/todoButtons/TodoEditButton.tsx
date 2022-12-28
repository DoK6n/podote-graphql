import { Edit } from '../../vectors';
import { IconButton } from '../../base';
import { useTodoClientCache } from '../../../hooks';

interface Props {
  id: string;
}

function TodoEditButton({ id }: Props) {
  const { setTodoEditable } = useTodoClientCache();

  const handleEdit = async () => {
    setTodoEditable(id);
  };

  return (
    <IconButton onClick={handleEdit}>
      <Edit size={18} />
    </IconButton>
  );
}

export default TodoEditButton;
