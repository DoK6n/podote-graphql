import { createBrowserRouter } from 'react-router-dom';
import Docs, { docsLoader } from './Docs';
import Index from './Index';
import List, { listLoader } from './List';
import Root, { rootLoader } from './Root';
import Todo, { todoLoader } from './Todo';
import Search, { searchLoader } from './Search';
import Home from './Home';
// const Home = React.lazy(() => import('./Home'));
import Setting, { settingLoader } from './Setting';
import ErrorPage from './ErrorPage';
import Auth from './auth/Auth';
import Login, { loginLoader } from './auth/Login';
import RecycleBin, { recyclebinLoader } from './RecycleBin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            path: '/',
            element: <Home />,
            // loader: homeLoader,
            children: [
              { index: true, element: <Index message="아무것도 없어요." /> },
            ],
          },
          {
            path: 'search',
            element: <Search />,
            loader: searchLoader,
            children: [
              {
                index: true,
                element: <Index message="검색된 결과가 없어요." />,
              },
            ],
          },
          {
            path: 'todo',
            element: <Todo />,
            loader: todoLoader,
            children: [
              { index: true, element: <Index message="한가하군요." /> },
            ],
          },
          {
            path: 'docs/:id',
            element: <Docs />,
            loader: docsLoader,
            children: [{ index: true, element: <Index /> }],
          },
          {
            path: 'setting',
            element: <Setting />,
            loader: settingLoader,
            children: [{ index: true, element: <Index /> }],
          },
          {
            path: 'recyclebin',
            element: <RecycleBin />,
            loader: recyclebinLoader,
            children: [
              { index: true, element: <Index message="휴지통이 비었어요." /> },
            ],
          },
          {
            path: 'auth',
            element: <Auth />,
            children: [
              { path: 'login', element: <Login />, loader: loginLoader },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'list',
    element: <List />,
    loader: listLoader,
  },
]);

export default router;
