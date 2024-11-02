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
import AddPostNext from './pages/AddPostNext';
import Profile from './pages/Profile';
import ProfileFirst from './components/ProfileFirst';
import ProfileChat from './components/ProfileChat';
import ProfileAdmin from './components/ProfileAdmin';

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
	{
		path: "/add-post/check",
		element: <AddPostNext />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/profile",
		element: <Profile />,
		errorElement: <ErrorPage />,
		children: [
      {
        path: "first",
        element: <ProfileFirst />
      },
      {
        path: "chat",
        element: <ProfileChat />
      },
      {
        path: "chat-admin",
        element: <ProfileAdmin />
      }
    ]
	}
]);


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
	<Provider store={store}>
		<RouterProvider router={router}/>
	</Provider>
);
