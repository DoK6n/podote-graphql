import { IconButton } from './base';

interface Props {
  onClick?: () => void;
}

function GoBackButton({ onClick }: Props) {
  return <IconButton onClick={onClick}>뒤로</IconButton>;
}

export default GoBackButton;
