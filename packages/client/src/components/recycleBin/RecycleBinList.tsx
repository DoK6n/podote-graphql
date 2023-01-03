import styled from '@emotion/styled';
import React, { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRetrieveAllRemovedTodoQuery } from '../../lib/graphql/query/query.generated';
import { useModalStore } from '../../lib/store/modal';
import { colors } from '../../styles/colors';
import { IconButton, RectinglePageBlock } from '../base';
import MobileModal from '../base/MobileModal';
import { DotsVerticalRounded } from '../vectors';
import MoreOptionsMenu from './MoreOptionsMenu';
import RecycleBinModalContent from './RecycleBinModalContent';

function RecycleBinList() {
  const { loading, error, data } = useRetrieveAllRemovedTodoQuery();
  const { modalState } = useModalStore();

  return (
    <Block>
      {data && data.retrieveAllRemovedTodo ? (
        data.retrieveAllRemovedTodo.map((todo) => (
          <RecycleItemBlock key={todo.id}>
            <ContentsGroup>
              <Text>{todo.title}</Text>
            </ContentsGroup>
            <OptionsGroup>
              <MoreOptionsMenu id={todo.id} documentId={todo.documentId} />
            </OptionsGroup>
          </RecycleItemBlock>
        ))
      ) : (
        <Outlet />
      )}
      {modalState.isModalOpen && (
        <MobileModal menus={<RecycleBinModalContent />} />
      )}
    </Block>
  );
}

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

const Block = styled(RectinglePageBlock)`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.border2};
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1.25rem 1rem 1rem 1rem;
  transition: all 0.2s ease-in-out;
`;

const ContentsGroup = styled.div``;

const OptionsGroup = styled.div``;

export default RecycleBinList;
