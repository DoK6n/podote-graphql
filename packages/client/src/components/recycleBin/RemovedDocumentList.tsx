import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { useRetrieveAllRemovedDocumentsQuery } from '../../lib/graphql/query/query.generated';
import { useModalStore } from '../../lib/store/modal';
import { IconButton } from '../base';
import MobileModal from '../base/MobileModal';
import { PreviewCard } from '../document';
import Preview from '../document/preview/Preview';
import { Checked, Unchecked } from '../vectors';
import { ListMode } from './ListModeSelector';
import MoreOptionsMenu from './MoreOptionsMenu';
import RecycleBinDocumentModalContent from './RecycleBinDocumentModalContent';

interface Props {
  mode: ListMode;
}

function RemovedDocumentList({ mode }: Props) {
  const removedDocuments = useRetrieveAllRemovedDocumentsQuery();
  const { modalState } = useModalStore();

  return (
    <Block>
      {mode === 'document' &&
      removedDocuments.data &&
      removedDocuments.data.retrieveAllRemovedDocuments ? (
        removedDocuments.data.retrieveAllRemovedDocuments.map((document) => (
          <PreviewCard key={document.id}>
            <TopGroup hasTodo={document.todo ? true : false}>
              {document.todo && (
                <TodoGroup>
                  <IconButton svgSize={14}>
                    {document.todo.done ? <Checked /> : <Unchecked />}
                  </IconButton>
                  <Text>{document.todo.title}</Text>
                </TodoGroup>
              )}
              <MoreOptionsMenu
                todoId={document.todo?.id}
                documentId={document.id}
              />
            </TopGroup>
            <Preview documentContent={document.content} />
          </PreviewCard>
        ))
      ) : (
        <Outlet />
      )}
      {modalState.isModalOpen && (
        <MobileModal menus={<RecycleBinDocumentModalContent />} />
      )}
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 7px;
  padding: 6px;
`;

const Text = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.6;
  width: 80px;
`;

const TopGroup = styled.div<{ hasTodo: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.hasTodo ? 'space-between' : 'flex-end')};
`;

const TodoGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
`;

export default RemovedDocumentList;
