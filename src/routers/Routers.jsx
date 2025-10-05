import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import BookDetails from '../pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
        {
          index: true,
          path:"/",
          Component: HomePage
        },
        {
          path: 'listed_books',
          element: <h1 className='text-2xl'>Listed Books</h1>
        },
        {
          path: 'Pages_to_read',
          element: <h1 className='text-2xl'>Pages to Read</h1>
        },
        {
          path: 'book_details/:id',
          Component: BookDetails,
          loader: () => fetch('/booksData.json')
        }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);