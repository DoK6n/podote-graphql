import { useCallback } from 'react';
import { Todo } from '../../lib/graphql/types';
import { useModalStore } from '../../lib/store/modal';
import { IconButton } from '../base';
import { DotsVerticalRounded } from '../vectors';

interface Props extends Pick<Todo, 'id' | 'documentId'> {}

function MoreOptionsMenu({ id, documentId }: Props) {
  const { modalOpen, modalState } = useModalStore();

  const handleModalOpen = useCallback(() => {
    modalOpen({ todoId: id, documentId });
  }, [modalOpen, modalState.isModalOpen]);
  return (
    <IconButton onClick={handleModalOpen}>
      <DotsVerticalRounded size={18} />
    </IconButton>
  );
}

export default MoreOptionsMenu;
