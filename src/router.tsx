import {
    createBrowserRouter
} from "react-router-dom";
import ErrorBoundaryLayout from "./components/ErrorBoundaryLayout";
import Layout from "./layout/Layout";
import { searchLoader } from "./lib/loaders/searchLoader";
import ProductDetails from "./pages/ProductDetails";
import Search from './pages/Search';
import Welcome from "./pages/Welcome";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorBoundaryLayout />,
        children: [
            { path: "/", element: <Welcome /> },
            { path: "/busqueda", loader: searchLoader, element: <Search /> },
            { path: "/producto/:id", element: <ProductDetails /> },
            { path: "*", element: <><p>Pagina no encontrada</p></> }
        ]
    },

]);