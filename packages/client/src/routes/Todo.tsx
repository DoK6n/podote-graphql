import {
  LoaderFunction,
  redirect,
} from 'react-router-dom';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import { Logo } from '../components/vectors';
import styled from '@emotion/styled';
import { colors } from '../styles/colors';
import { TodoInput, TodoList } from '../components/todo';
import { DropdownButton } from '../components/dropdown';
import { checkIsLoggedIn } from '../lib/protectRoute';
import { useAccount } from '../hooks';
import { RectinglePageBlock } from '../components/base';

/**
 * 할일 목록 화면
 *
 * Loader에서 로그인 체크 후 비로그인시 로그인 화면으로 이동
 *  */
export const todoLoader: LoaderFunction = async () => {
  const isLoggedIn = checkIsLoggedIn();
  if (!isLoggedIn) return redirect('/auth/login?next=/todo');

  return {};
};

interface LoaderResult {}

function Todo() {
  useAccount();

  return (
    <>
      <MobileHeader
        title={
          <div>
            <Logo width={24} height={24} /> Todo
          </div>
        }
      />
      <Block>
        <TodoBlock>
          <TodoSortMenu>
            <DropdownButton itemList={['All Todos', 'Tags', 'Completed']} />
          </TodoSortMenu>
          <TodoInput />
          <TodoList />
        </TodoBlock>
      </Block>
      <Footer />
    </>
  );
}

const Block = styled.div`
  flex: 1;
  overflow-x: hidden;
  padding: 1rem;
`;

const TodoBlock = styled(RectinglePageBlock)`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.border2};
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0 0 1rem;
  transition: all 0.2s ease-in-out;
`;

const TodoSortMenu = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-bottom: 0.938rem;
`;

export default Todo;
