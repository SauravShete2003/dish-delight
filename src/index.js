
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import About from "./../src/views/About/About"
import VegCard from './views/Categories/CategoriesVeg';
import HomeCategories from './components/HomeCategories/HomeCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




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
    
        {
            path: "/1",
            element: <HomeCategories/>
        }
    


        
    ])
  root.render(<RouterProvider router={router}/>)