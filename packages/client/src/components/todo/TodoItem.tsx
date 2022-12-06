import styled from '@emotion/styled';
import GoDocsButton from '../GoDocsButton';
import { IconButton } from '../base';
import { Checked, Unchecked } from '../vectors';
import { useState } from 'react';

interface Props {
  title: string;
  hasDocument?: boolean;
  docsId?: number;
  isDone?: boolean;
}

function TodoItem({
  title,
  hasDocument = false,
  docsId,
  isDone = false,
}: Props) {
  const [done, setDone] = useState(isDone);

  const handleDone = () => setDone(d => !d);

  return (
    <TodoItemWrapper>
      <TodoItemCheckBoxGroup>
        <IconButton onClick={handleDone}>
          {done ? <Checked /> : <Unchecked />}
        </IconButton>
      </TodoItemCheckBoxGroup>
      <TodoItemTitleGroup>
        <TodoItemText>{title}</TodoItemText>
        {hasDocument && (
          <TodoItemIconWrapper>
            <GoDocsButton id={docsId} hasDocument={hasDocument} />
          </TodoItemIconWrapper>
        )}
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

export default TodoItem;
