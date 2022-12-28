import { IconButton } from '../../base';
import { Delete } from '../../vectors';

function TodoRemoveButton() {
  return (
    <IconButton>
      <Delete size={20} />
    </IconButton>
  );
}

export default TodoRemoveButton;
