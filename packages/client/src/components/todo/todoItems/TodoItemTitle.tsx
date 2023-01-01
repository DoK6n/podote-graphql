import styled from '@emotion/styled';
import {
  forwardRef,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react';
import { useTodoClientCache } from '../../../hooks';
import { focusingEndPositionContentEditableText } from '../../../lib/focusContentEditableTextToEnd';
import { useEditTodoTitleMutation } from '../../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../../lib/graphql/query/query.generated';

interface Props {
  id: string;
  editable: boolean;
  title: string;
}
const TodoItemTitle = forwardRef<HTMLDivElement, Props>(
  ({ id, editable, title }, ref) => {
    const [editTodoTitleMutation] = useEditTodoTitleMutation();
    const { setUnEditable, getBeforeEditTodoTitle } = useTodoClientCache();
    const forwardedRef = ref as MutableRefObject<HTMLDivElement | null>;

    useEffect(() => {
      if (editable && forwardedRef.current) {
        focusingEndPositionContentEditableText(forwardedRef.current);
      }
    }, [editable]);

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
      <Text
        contentEditable={editable}
        onKeyDown={handleEditTitle}
        suppressContentEditableWarning
        ref={forwardedRef}
      >
        {title}
      </Text>
    );
  },
);

const Text = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.6;
`;

export default TodoItemTitle;
