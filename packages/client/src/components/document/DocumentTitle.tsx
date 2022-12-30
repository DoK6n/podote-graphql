import styled from '@emotion/styled';

interface Props {
  title?: string;
}

function DocumentTitle({ title = 'Untitled' }: Props) {
  return (
    <Title
      contentEditable={false}
      translate={'no'}
      role={'textbox'}
      suppressContentEditableWarning={true}
      placeholder={'Title'}
    >
      {title}
    </Title>
  );
}

const Title = styled.div`
  height: 1rem;
  font-size: 1.5rem;
  margin: 1rem 2rem 2.5rem 0;
`;

export default DocumentTitle;
