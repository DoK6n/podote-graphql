import styled from '@emotion/styled';
import GoDocsButton from '../GoDocsButton';
import { memo, useState } from 'react';
import {
  TodoRemoveButton,
  TodoEditButton,
  TodoEditCancel,
  TodoSaveButton,
  AddTodoDocumentButton,
} from './todoButtons';
import { TodoItemTitle, TodoItemCheckBox } from './todoItems';
import { Maybe } from '../../lib/graphql/types';
import { colors } from '../../styles/colors';
import { css, keyframes } from '@emotion/react';

interface Props {
  id: string;
  title: string;
  hasDocument?: boolean;
  documentId?: Maybe<string> | undefined;
  editable: boolean;
  isDone: boolean;
}

function TodoItem({
  id,
  title,
  hasDocument = false,
  documentId,
  editable,
  isDone = false,
}: Props) {
  const [text, setText] = useState(title);

  return (
    <TodoItemWrapper editable={editable}>
      <TodoItemCheckBoxGroup>
        <TodoItemCheckBox id={id} isDone={isDone} />
      </TodoItemCheckBoxGroup>
      <TodoItemTitleGroup>
        <TodoItemTitle
          id={id}
          title={text}
          editable={editable}
          setText={setText}
        />
      </TodoItemTitleGroup>
      <TodoItemIconWrapper>
        {!hasDocument ? <AddTodoDocumentButton todoId={id} /> : <GoDocsButton documentId={documentId} hasDocument={hasDocument} />}
        {/* {editable ? <TodoSaveButton id={id} /> : <TodoEditButton id={id} />} */}
        {!editable && <TodoEditButton id={id} />}
        {editable && (
          <TodoEditCancel
            id={id}
            setText={setText}
          />
        )}
        <TodoRemoveButton id={id} />
      </TodoItemIconWrapper>
    </TodoItemWrapper>
  );
}

const blinkingEffect = keyframes`
  50% {
    border: 1px dotted #483d6b;
  }
`;

const TodoItemWrapper = styled.div<{ editable: boolean }>`
  gap: 5px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 5px;
  margin-right: 1rem;

  ${({ editable }) =>
    editable
      ? css`
          border: 1px solid ${colors.purple7};
          animation: ${blinkingEffect} 1.3s linear infinite;
          caret-color: ${colors.brightPurple};
        `
      : css`
          &:hover {
            background-color: #3f3663;
          }
          border: 1px solid #00000000;
        `}
`;

/** 가장 좌측에 위치할 첫번째 그룹 - @example `checkBox` */
const TodoItemCheckBoxGroup = styled.div`
  display: flex;
  color: #756a98;
`;

/** 두번째 그룹 - @example `text`, `icons` */
const TodoItemTitleGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 1rem;
`;

/** TitleGroup에 들어갈 icon들 - @example `document`, `watchingDocument` */
const TodoItemIconWrapper = styled.span`
  margin: 0 0.5rem 0 0.5rem;
  color: #5a6678;
  display: flex;
  align-items: center;
`;

export default memo(TodoItem);
