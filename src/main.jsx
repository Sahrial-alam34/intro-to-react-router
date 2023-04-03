import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//     errorElement: <ErrorPage />

//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>,
//     errorElement: <ErrorPage />
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home></Home>,
    children: [
      {
          path: '/',
          element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        // loader: ({params}) => console.log(params.friendId)
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element: <PostDetails></PostDetails>,
        // loader: ({params}) =>console.log(params)
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <div>44444444400000000000004444444444444444</div>

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
