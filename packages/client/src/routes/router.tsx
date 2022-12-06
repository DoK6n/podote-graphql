import { createBrowserRouter } from 'react-router-dom';
import Docs, { docsLoader } from './Docs';
import Index from './Index';
import List, { listLoader } from './List';
import Root, { rootLoader } from './Root';
import Todo, { todoLoader } from './Todo';
import Search from './Search';
import Home, { homeLoader } from './Home';
import Setting, { settingLoader } from './Setting';
import ErrorPage from './ErrorPage';
import Document from '../components/document/Document';

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
            loader: homeLoader,
            children: [
              { index: true, element: <Index message='아무것도 없어요.' /> },
            ],
          },
          {
            path: 'search',
            element: <Search />,
            // loader: searchLoader,
            children: [
              {
                index: true,
                element: <Index message='검색된 결과가 없어요.' />,
              },
            ],
          },
          {
            path: 'todo',
            element: <Todo />,
            loader: todoLoader,
            children: [
              { index: true, element: <Index message='한가하군요.' /> },
            ],
          },
          {
            path: 'docs/:id',
            element: <Docs />,
            loader: docsLoader,
            children: [{ index: true, element: <Document /> }],
          },
          {
            path: 'setting',
            element: <Setting />,
            loader: settingLoader,
            children: [{ index: true, element: <Index /> }],
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
