import {
    createBrowserRouter
} from "react-router-dom";
import ErrorBoundaryLayout from "./components/ErrorBoundaryLayout";
import ProductDetails from "./components/ProductDetails";
import Welcome from "./components/Welcome";
import Home from './pages/Home';

export const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundaryLayout />,
        children: [
            { path: "/", element: <Welcome /> },
            { path: "/inicio", element: <Home /> },
            { path: "/producto/:id", element: <ProductDetails /> }
        ],
    },

]);