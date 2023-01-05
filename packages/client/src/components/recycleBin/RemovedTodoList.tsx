import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { useRetrieveAllRemovedTodoQuery } from '../../lib/graphql/query/query.generated';
import { useModalStore } from '../../lib/store/modal';
import { colors } from '../../styles/colors';
import { IconButton, RectinglePageBlock } from '../base';
import MobileModal from '../base/MobileModal';
import { Checked, FillPage, Unchecked } from '../vectors';
import { ListMode } from './ListModeSelector';
import MoreOptionsMenu from './MoreOptionsMenu';
import RecycleBinModalContent from './RecycleBinTodoModalContent';

interface Props {
  mode: ListMode;
}

function RemovedTodoList({ mode }: Props) {
  const removedTodos = useRetrieveAllRemovedTodoQuery();
  const { modalState } = useModalStore();
  return (
    <>
      {mode === 'todo' &&
      removedTodos.data &&
      removedTodos.data.retrieveAllRemovedTodo ? (
        removedTodos.data.retrieveAllRemovedTodo.map((todo) => (
          <RecycleItemBlock key={todo.id}>
            <ContentsGroup>
              <IconButton css={DefaultCursorStyle} svgSize={18}>
                {todo.done ? <Checked /> : <Unchecked />}
              </IconButton>
              <Text>{todo.title}</Text>
              {todo.documentId && (
                <IconButton css={DefaultCursorStyle} svgSize={18} disabled>
                  <FillPage />
                </IconButton>
              )}
            </ContentsGroup>
            <MoreOptionsMenu todoId={todo.id} documentId={todo.documentId} />
          </RecycleItemBlock>
        ))
      ) : (
        <Outlet />
      )}
      {modalState.isModalOpen && (
        <MobileModal menus={<RecycleBinModalContent />} />
      )}
    </>
  );
}

const DefaultCursorStyle = css`
  cursor: default;
`;

const Text = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.6;
`;

const RecycleItemBlock = styled(RectinglePageBlock)`
  height: 2.5rem;
  border: 1px solid ${colors.border0};
  padding: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentsGroup = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  cursor: default;
`;

export default RemovedTodoList;
