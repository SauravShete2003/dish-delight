
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import About from "./../src/views/About/About"
import VegCard from './views/Categories/CategoriesVeg';
const root = ReactDOM.createRoot(document.getElementById('root'));

    
         const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/vegcard",
            element: <VegCard />,
        },
    
    


        
    ])
  root.render(<RouterProvider router={router}/>)