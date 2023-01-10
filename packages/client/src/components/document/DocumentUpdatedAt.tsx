import styled from '@emotion/styled';
import { getTimeDiff } from '../../lib/getTimeDiff';
import dayjs from 'dayjs';

interface Props {
  updatedDt: string;
}

function DocumentUpdatedDt({ updatedDt }: Props) {
  const lastUpdatedDate = getTimeDiff(dayjs(updatedDt));
  return <Block>최근 수정 {lastUpdatedDate}</Block>;
}

const Block = styled.div`
  color: #4d3e77;
  margin: 0 1rem 0 1rem;
`;

export default DocumentUpdatedDt;
