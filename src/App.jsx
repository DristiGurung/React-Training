import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Home, { fetch } from "./routes/Home";
import Root from "./routes/Root";
import Post, { postLoader } from "./routes/Post";
import NewPost from "./routes/NewPost";
import "./App.css"

export default function App(){
  const router = createBrowserRouter([{
    path:'/',
    element: <Root />,
    children: [
      {
        path:'/',
        element:<Home />,
        loader: fetch
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/new',
        element:<NewPost />,
        

      },
      {
        path:'/post/:id',
        element:<Post />,
        loader: postLoader
      }
    ]

  }])

  return (
    <RouterProvider router={router}/>
  
    )
}

