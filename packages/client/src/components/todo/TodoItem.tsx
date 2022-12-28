import styled from '@emotion/styled';
import GoDocsButton from '../GoDocsButton';
import { IconButton } from '../base';
import { Checked, Unchecked } from '../vectors';
import { useState, memo, KeyboardEvent, useRef, useEffect } from 'react';
// import { colors } from '../../styles/colors';
import TodoRemoveButton from './TodoRemoveButton';
import TodoEditButton from './TodoEditButton';
import TodoEditCancel from './TodoEditCancel';
// import TodoSaveButton from './TodoSaveButton';
import { useEditTodoTitleMutation } from '../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../lib/graphql/query/query.generated';
import { useTodoClientCache } from '../../hooks';
import { focusContentEditableTextToEnd } from '../../lib/focusContentEditableTextToEnd';

interface Props {
  id: string;
  title: string;
  hasDocument?: boolean;
  docsId?: string;
  editable: boolean;
  isDone?: boolean;
}

function TodoItem({
  id,
  title,
  hasDocument = false,
  docsId,
  editable,
  isDone = false,
}: Props) {
  const [done, setDone] = useState(isDone);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const [editTodoTitleMutation] = useEditTodoTitleMutation();
  const { setUnEditable, getBeforeEditTodoTitle } = useTodoClientCache();

  useEffect(() => {
    if (editable && titleRef.current) {
      focusContentEditableTextToEnd(titleRef.current);
    }
  }, [editable]);

  const handleDone = () => setDone((d) => !d);
  const handleEditTitle = async (e: KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      e.preventDefault();
      await editTodoTitleMutation({
        variables: {
          data: {
            id,
            title: target.innerText !== '' ? target.innerText : 'untitled',
          },
        },
        refetchQueries: [
          {
            query: RetrieveAllTodosDocument,
          },
        ],
      });
      setUnEditable(id);
    } else if (e.key === 'Escape') {
      const beforeTitleId = getBeforeEditTodoTitle(id);
      if (beforeTitleId) {
        target.innerText = beforeTitleId;
      }
      setUnEditable(id);
    }
  };

  return (
    <TodoItemWrapper>
      <TodoItemCheckBoxGroup>
        <IconButton onClick={handleDone}>
          {done ? <Checked /> : <Unchecked />}
        </IconButton>
      </TodoItemCheckBoxGroup>
      <TodoItemTitleGroup>
        <TodoItemText
          contentEditable={editable}
          onKeyDown={handleEditTitle}
          suppressContentEditableWarning
          ref={titleRef}
        >
          {title}
        </TodoItemText>
        {hasDocument && (
          <TodoItemIconWrapper>
            <GoDocsButton id={docsId} hasDocument={hasDocument} />
          </TodoItemIconWrapper>
        )}
        <TodoItemIconWrapper>
          {/* {editable ? <TodoSaveButton id={id} /> : <TodoEditButton id={id} />} */}
          {!editable && <TodoEditButton id={id} />}
          {editable && <TodoEditCancel id={id} ref={titleRef} />}
          <TodoRemoveButton />
        </TodoItemIconWrapper>
      </TodoItemTitleGroup>
    </TodoItemWrapper>
  );
}

const TodoItemWrapper = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 5px;
  margin-right: 1rem;
  &:hover {
    background-color: #3f3663;
  }
`;

/** 가장 좌측에 위치할 첫번째 그룹 - @example `checkBox` */
const TodoItemCheckBoxGroup = styled.div`
  display: flex;
  color: #756a98;
`;

/** 두번째 그룹 - @example `text`, `icons` */
const TodoItemTitleGroup = styled.div`
  display: flex;
  cursor: default;
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 1rem;
`;

const TodoItemText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.6;
`;

/** TitleGroup에 들어갈 icon들 - @example `document`, `watchingDocument` */
const TodoItemIconWrapper = styled.span`
  margin: 0 0.5rem 0 0.5rem;
  color: #5a6678;
  display: flex;
  align-items: center;
`;

export default memo(TodoItem);
