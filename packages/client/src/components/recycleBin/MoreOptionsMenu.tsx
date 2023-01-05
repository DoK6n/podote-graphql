import { useCallback } from 'react';
import { useModalStore } from '../../lib/store/modal';
import { IconButton } from '../base';
import { DotsVerticalRounded } from '../vectors';
import { DocumentId, TodoId } from '../../lib/types';

interface Props {
  todoId?: TodoId;
  documentId?: DocumentId;
}

function MoreOptionsMenu({ todoId, documentId }: Props) {
  const { modalOpen, modalState } = useModalStore();

  const handleModalOpen = useCallback(() => {
    modalOpen({ todoId, documentId });
  }, [modalOpen, modalState.isModalOpen]);
  return (
    <IconButton onClick={handleModalOpen}>
      <DotsVerticalRounded size={18} />
    </IconButton>
  );
}

export default MoreOptionsMenu;
