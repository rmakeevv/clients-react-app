import { CustomDataTable } from 'components';
import ErrorPage from 'ErrorPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ClientPage from 'routes/Client';
import Root from 'routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <CustomDataTable /> },
      { path: 'clients/:clientId', element: <ClientPage /> },
    ],
  },
]);

export default router;
