import styled from '@emotion/styled';

interface Props {
  updatedDt: string;
}

function DocumentUpdatedDt({ updatedDt }: Props) {
  const formatUpdateDt = new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Seoul',
  }).format(new Date(updatedDt));

  return <Block>{formatUpdateDt}</Block>;
}

const Block = styled.div`
  color: #4d3e77;
`;

export default DocumentUpdatedDt;
