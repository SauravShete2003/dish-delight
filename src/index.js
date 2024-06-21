
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import About from "./../src/views/About/About"
import VegCard from './views/Categories/categoryVeg/CategoriesVeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "../src/components/Navbar/Navbar"
import Recipe from "../src/views/Recipe/RecipeVeg/Recipe"
import RecipeNonveg from '../src/views/Recipe/RecipeNonveg/RecipeNonveg';
import Footer from './components/Footer/Footer';
import Login from "./views/Login/Login"
import HomeCategories from './components/HomeCategories/HomeCategories';
import "./index.css"
import CategoryNonveg from "./views/Categories/categoryNonveg/CategorNonveg"
import CategoriesVeg from './views/Categories/categoryVeg/CategoriesVeg';
import MaharashtrianSpecial from './views/MaharashtrianSpecial/MaharashtrianSpecial';
import SpecialDish from "./components/SpecialDish/Veg"
const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([

    {
        path: "Navbar",
        element: <Navbar />,
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/VegCard/:id",
        element: <VegCard />,
    },

    {
        path: "/:veg/:id",
        element: <Recipe />
    },

    {
        path: "/:non-veg/:id",
        element: <RecipeNonveg />
    },

    {
        path: "/footer",
        element: <Footer/>
    },

    {
        path: "/login",
        element: <Login/>
    },

   {
    path: "/homecategories",
    element: <HomeCategories />
   },
   {
    path:"/veg",
    element: <CategoriesVeg />
   },
   {
    path : "/non-veg",
    element:<CategoryNonveg/>
   },
   {
    path: "/maharashtraspecial/:id",
    element: <MaharashtrianSpecial/>
   },
   {
    path: "/specialdish",
    element: <SpecialDish/>
   }


])
root.render(<RouterProvider router={router} />)