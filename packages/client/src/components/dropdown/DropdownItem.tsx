import { ItemButton } from '../base';
import { MouseEventHandler } from 'react';

interface Props {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function DropdownItem({ name, onClick }: Props) {
  return <ItemButton onClick={onClick}>{name}</ItemButton>;
}

export default DropdownItem;
