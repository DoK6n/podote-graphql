import { KeyboardEvent, CompositionEvent } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from '../../styles/colors';
import { RemirrorJSON } from 'remirror';
import { useAddNewTodoMutation } from '../../lib/graphql/mutation/mutation.generated';
import { RetrieveAllTodosDocument } from '../../lib/graphql/query/query.generated';

const emptyContent: RemirrorJSON = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: {
        nodeIndent: 0,
        nodeTextAlignment: null,
        nodeLineHeight: null,
        style: '',
      },
    },
  ],
};

function TodoInput() {
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const [addNewTodoMutation] = useAddNewTodoMutation();

  const handleAddTodoItem = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) return;
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter' && target.value !== '') {
      await addNewTodoMutation({
        variables: {
          data: {
            title: target.value,
          },
        },
        refetchQueries: [
          {
            query: RetrieveAllTodosDocument,
          },
        ],
      });
      target.value = '';
    }
  };

  return (
    <Input
      onCompositionStartCapture={() => setIsComposing(true)}
      onCompositionEndCapture={() => setIsComposing(false)}
      placeholder="Add New Todo"
      onKeyUp={handleAddTodoItem}
    />
  );
}

const Input = styled.input`
  border-radius: 10px;
  background: ${colors.purple2};
  border: 1px solid ${colors.border2};
  border-radius: 6px;
  color: #fff;
  padding: 0.5rem;
  outline: none;
  margin-right: 1rem;
`;

export default TodoInput;
