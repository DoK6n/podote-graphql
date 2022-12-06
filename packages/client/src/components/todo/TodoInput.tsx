import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

function TodoInput() {
  return <Input placeholder='Add New Todo' />;
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
