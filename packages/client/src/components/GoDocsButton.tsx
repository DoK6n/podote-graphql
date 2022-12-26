import { useNavigate } from 'react-router-dom';
import { IconButton } from './base';
import { FillPage } from './vectors';

interface Props {
  id?: string;
  hasDocument: boolean;
}

function GoDocsButton({ id, hasDocument }: Props) {
  const navigate = useNavigate();

  const goDocs = (i: string) => {
    navigate(`/docs/${i}`);
  };

  return (
    <>
      {hasDocument && (
        <IconButton onClick={() => goDocs(id!)}>
          <FillPage size={20} />
        </IconButton>
      )}
    </>
  );
}

export default GoDocsButton;
