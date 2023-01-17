import styled from '@emotion/styled';
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react';
import { useTodoClientCache } from '../../../hooks';
import { useEditTodoTitleMutation } from '../../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../../lib/graphql/query/query.generated';
import { colors } from '../../../styles/colors';

interface Props {
  id: string;
  editable: boolean;
  title: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
function TodoItemTitle({ id, editable, title, setText }: Props) {
  const [editTodoTitleMutation] = useEditTodoTitleMutation();
  const { setUnEditable, getBeforeEditTodoTitle } = useTodoClientCache();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const element = inputRef.current!;
    if (editable) {
      element.focus();
      element.setSelectionRange(title.length, title.length);
    }
  }, [editable]);

  const handleEditTitle = async (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      e.preventDefault();
      await editTodoTitleMutation({
        variables: {
          data: {
            id,
            title: title !== '' ? title : 'untitled',
          },
        },
        refetchQueries: [
          {
            query: RetrieveAllTodosDocument,
          },
        ],
      });
      setText(target.value);
      setUnEditable(id);
    } else if (e.key === 'Escape') {
      const beforeTitle = getBeforeEditTodoTitle(id);
      if (beforeTitle) {
        setText(beforeTitle);
      }
      setUnEditable(id);
    }
  };

  return (
    <Text
      type={'text'}
      readOnly={!editable}
      disabled={!editable}
      onKeyDown={handleEditTitle}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      ref={inputRef}
      value={title}
      editable={editable}
    />
  );
}

const Text = styled.input<{ editable: boolean }>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.6;
  border: none;
  background: transparent;
  color: ${colors.text1};
  width: 100%;
  outline: none;
  pointer-events: ${({ editable }) => !editable && 'none'};
`;

export default TodoItemTitle;
