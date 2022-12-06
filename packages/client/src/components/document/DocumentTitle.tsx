import styled from '@emotion/styled';

function DocumentTitle() {
  return (
    <Title
      contentEditable={true}
      translate={'no'}
      role={'textbox'}
      suppressContentEditableWarning={true}
      placeholder={'Title'}>
      제목
    </Title>
  );
}

const Title = styled.div`
  height: 1rem;
  font-size: 1.5rem;
  margin: 1rem 2rem 2.5rem 0;
`;

export default DocumentTitle;
