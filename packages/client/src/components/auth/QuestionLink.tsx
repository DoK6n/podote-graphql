import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/colors';

interface Props {
  question: string;
  name: string;
  to: string;
}

function QuestionLink({ question, name, to }: Props) {
  return (
    <Block>
      {question} <Link to={to}>{name}</Link>
    </Block>
  );
}

const Block = styled.div`
  color: ${colors.purple0};
  a {
    font-weight: 600;
    color: ${colors.brightPurple};
    text-decoration: underline;
  }
`;

export default QuestionLink;
