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
interface Props {
  id: string;
}

/**
 * # 문서
 * - 기본 기능은 할일 아이템에 세부 문서를 등록하여 작성
 * - 최근 수정일 표시
 * - 제목은 할일 아이템에 추가한 내용 표시
 * - 제목아래 추가한 해시태그 표시 겸 해시태그 추가 버튼
 * - 에디터 메뉴바
 *    - Heading, Callout 메뉴 나머지는 드롭다운으로 선택 -> deps 1 추가
 * - 코드블록에 언어 변경 버튼 추가 -> 기본은 JS 그대로
 * - 우측 상단에 저장, 취소 버튼 -> fixed로 고정
 * - 좌측 상단(?)에 토글버튼으로 view 모드와 edit 모드 선택
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
    <DocumentWrapper>
      {data && data.retrieveDocument ? (
        <>
          <OptionsGroup>
            <MoreOptionsMenu
              todoId={data.retrieveDocument.todoId}
              documentId={data.retrieveDocument.id}
            />
          </OptionsGroup>
          <ScrollWrapper>
            <DocumentUpdatedAt updatedDt={data.retrieveDocument.updatedDt} />
            <DocumentTitle title={data.retrieveDocument.todo?.title} />
            {/* <DocumentHashTag /> */}
            <div
              contentEditable={true}
              translate={'no'}
              role={'textbox'}
              suppressContentEditableWarning={true}
              placeholder={'내용을 입력하세요.'}
            >
              {JSON.stringify(data.retrieveDocument.content)}
            </div>
          </ScrollWrapper>
        </>
      ) : (
        <Outlet />
      )}
      {modalState.isModalOpen && (
        <MobileModal menus={<DocumentModalContent />} />
      )}
    </DocumentWrapper>
  );
}

const OptionsGroup = styled.div`
  text-align: end;
`;

const ScrollWrapper = styled.div`
  max-height: 100%;
  overflow-y: 100%;
  ${scrollbarStyle}
`;

const DocumentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0 0 1rem;
  transition: all 0.2s ease-in-out;
`;

export default Document;
