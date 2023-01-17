import { forwardRef, MutableRefObject } from 'react';
import { useTodoClientCache } from '../../../hooks';
import { IconButton } from '../../base';
import { Cancel } from '../../vectors';

interface Props {
  id: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

function TodoEditCancel({ id, setText }: Props) {
  const { getBeforeEditTodoTitle, setUnEditable } = useTodoClientCache();

  const handleEditCancel = async () => {
    setUnEditable(id);
    const beforeTitle = getBeforeEditTodoTitle(id);
    if (!beforeTitle) return;
    setText(beforeTitle);
  };

  return (
    <IconButton onClick={handleEditCancel}>
      <Cancel size={18} />
    </IconButton>
  );
}

export default TodoEditCancel;
