import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { data, DataType } from '../lib/data';
import { Logo } from '../components/vectors';
import styled from '@emotion/styled';
import { colors } from '../styles/colors';
import { TodoInput, TodoItem, TodoList } from '../components/todo';
import { DropdownButton } from '../components/dropdown';
import { css } from '@emotion/react';

export const todoLoader: LoaderFunction = async ({ request }) => {
  return { data };
};

interface LoaderResult {
  data: DataType[];
}

function Todo() {
  const { data } = useLoaderData() as LoaderResult;

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
          <TodoList>
            <TodoItem
              title={'공부하자'}
              docsId={1}
              hasDocument={true}
              isDone={true}
            />
            {data ? (
              data?.map(d => (
                <TodoItem
                  title={d.title}
                  docsId={d.id}
                  hasDocument={d.document}
                  key={d.id}
                />
              ))
            ) : (
              <Outlet />
            )}
          </TodoList>
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

const TodoBlock = styled.div`
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
