import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import ErrorPage from './pages/error-page';
import store from './app/store';
import Catalog from './pages/Catalog';
import AddPost from './pages/AddPost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
		errorElement: <ErrorPage />,
  },
	{
    path: "/catalog",
    element: <Catalog />,
		errorElement: <ErrorPage />,
  },
	{
    path: "/add-post",
    element: <AddPost />,
		errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
	<Provider store={store}>
		<RouterProvider router={router}/>
	</Provider>
);
