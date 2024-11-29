import {
    createBrowserRouter
} from "react-router-dom";
import { ErrorBoundaryLayout } from "./components";
import Layout from "./layout/Layout";
import { searchLoader } from "./lib";
import { ProductDetails, SearchPage, Welcome } from "./pages/";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorBoundaryLayout />,
        children: [
            { path: "/", element: <Welcome /> },
            { path: "/busqueda", loader: searchLoader, element: <SearchPage /> },
            { path: "/producto/:id", element: <ProductDetails /> },
            { path: "*", element: <ErrorBoundaryLayout status="404" statusText="Pagina no encontrada" /> }
        ]
    },

]);