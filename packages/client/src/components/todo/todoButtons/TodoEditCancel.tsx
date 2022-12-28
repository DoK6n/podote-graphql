import { forwardRef, MutableRefObject } from 'react';
import { useTodoClientCache } from '../../../hooks';
import { IconButton } from '../../base';
import { Cancel } from '../../vectors';

interface Props {
  id: string;
}

const TodoEditCancel = forwardRef<HTMLDivElement, Props>(({ id }, ref) => {
  const { getBeforeEditTodoTitle, setUnEditable } = useTodoClientCache();

  const handleEditCancel = async () => {
    setUnEditable(id);
    const beforeTitle = getBeforeEditTodoTitle(id);
    const forwardedRef = ref as MutableRefObject<HTMLDivElement | null>;
    if (!forwardedRef.current || !beforeTitle) return;
    forwardedRef.current.innerText = beforeTitle;
  };

  return (
    <IconButton onClick={handleEditCancel}>
      <Cancel size={18} />
    </IconButton>
  );
});

export default TodoEditCancel;
