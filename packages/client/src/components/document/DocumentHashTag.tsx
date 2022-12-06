import styled from "@emotion/styled";

function DocumentHashTag() {
  return (
    <HashTagWrapper>
      <HashTag>#추가</HashTag>
    </HashTagWrapper>
  );
}

const HashTagWrapper = styled.div`
  display: flex;
`;
const HashTag = styled.span`
  background-color: #483d6b;
  cursor: 'pointer';
  border-radius: 10px;
  font-size: 0.6rem;
  padding: 0.3rem;
  margin-bottom: 1rem;
`;

export default DocumentHashTag;
