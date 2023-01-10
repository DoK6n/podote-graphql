import styled from '@emotion/styled';
import { RemirrorJSON } from 'remirror';
import { Editor } from '../editor';

interface Props {
  documentContent: RemirrorJSON;
}

function Preview({ documentContent }: Props) {
  return (
    <Block>
      <Editor content={documentContent} isEditable={false} />
    </Block>
  );
}

const Block = styled.div`
  min-height: 450px;
  max-height: 450px;
  width: 360px;
  overflow: hidden;
  transform-origin: top left;
  transform: scale(0.32962);
`;

export default Preview;
