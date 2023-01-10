import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import {
  previewCardSize,
  previewCardSizeSmall,
} from '../../../styles/previewCardStyle';

const PreviewCard = styled.div<{ small?: boolean }>`
  cursor: default;
  ${({ small = false }) => (!small ? previewCardSize : previewCardSizeSmall)}
  border: 1px solid ${colors.border1};
  border-radius: 10px;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  background-color: ${colors.purple4};
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${colors.purple2};
  }
`;

export default PreviewCard;
