import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { scrollbarStyle } from '../../styles/scrollbar';
import { RectinglePageBlock } from '../base';
import { ListMode } from './ListModeSelector';
import RemovedDocumentList from './RemovedDocumentList';
import RemovedTodoList from './RemovedTodoList';

interface Props {
  mode: ListMode;
}

function RecycleBinList({ mode }: Props) {
  return (
    <>
      <Block>
        {mode === 'todo' && <RemovedTodoList mode={mode} />}
        {mode === 'document' && <RemovedDocumentList mode={mode} />}
      </Block>
    </>
  );
}

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
  overflow-y: auto;
  ${scrollbarStyle}
`;

export default RecycleBinList;
