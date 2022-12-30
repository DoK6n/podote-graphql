import { useNavigate } from 'react-router-dom';
import { Maybe, Todo } from '../lib/graphql/types';
import { IconButton } from './base';
import { FillPage } from './vectors';

interface Props {
  documentId?: Maybe<string> | undefined;
  hasDocument: boolean;
}

function GoDocsButton({ documentId, hasDocument }: Props) {
  const navigate = useNavigate();

  const goDocs = () => {
    navigate(`/docs/${documentId!}`);
  };

  return (
    <>
      {hasDocument && (
        <IconButton onClick={() => goDocs()}>
          <FillPage size={20} />
        </IconButton>
      )}
    </>
  );
}

export default GoDocsButton;
