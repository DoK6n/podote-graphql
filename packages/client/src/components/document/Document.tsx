import DocumentUpdatedAt from './DocumentUpdatedAt';
import DocumentTitle from './DocumentTitle';
import styled from '@emotion/styled';
import { scrollbarStyle } from '../../styles/scrollbar';
import { useRetrieveDocumentQuery } from '../../lib/graphql/query/query.generated';
import { Outlet } from 'react-router-dom';
import { MoreOptionsMenu } from '../recycleBin';
import { useModalStore } from '../../lib/store/modal';
import MobileModal from '../base/MobileModal';
import DocumentModalContent from './DocumentModalContent';
import { Editor } from './editor';

interface Props {
  id: string;
}

/**
 * 문서 작성 컴포넌트
 * - 상세 보기
 * - 최근 수정된 날짜
 * - 할일 제목
 * - 문서 에디터
 * @param {string} id 문서 고유 아이디
 */
function Document({ id }: Props) {
  const { modalState } = useModalStore();

  const { data, loading, error } = useRetrieveDocumentQuery({
    variables: {
      data: {
        id,
      },
    },
  });

  return (
    <>
      <Block>
        {data && data.retrieveDocument ? (
          <>
            <OptionsGroup>
              <MoreOptionsMenu
                todoId={data.retrieveDocument.todoId}
                documentId={data.retrieveDocument.id}
              />
            </OptionsGroup>
            <DocumentUpdatedAt updatedDt={data.retrieveDocument.updatedDt} />
            <DocumentTitle title={data.retrieveDocument.todo?.title} />
            {/* <DocumentHashTag /> */}
            <Editor
              content={data.retrieveDocument.content}
              documentId={data.retrieveDocument.id}
              isEditable={true}
            />
          </>
        ) : (
          <Outlet />
        )}
        {modalState.isModalOpen && (
          <MobileModal menus={<DocumentModalContent />} />
        )}
      </Block>
    </>
  );
}

const OptionsGroup = styled.div`
  text-align: end;
  padding-right: 0.5rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  ${scrollbarStyle}/* transition: all 0.2s ease-in-out; */
`;

export default Document;
