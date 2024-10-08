import { useRouteError } from "react-router-dom";
import "../styles/error.css";

function ErrorBoundaryLayout() {
    const error: any = useRouteError();
    return (
        <div className="error-container">
            <h1>Status {" " + error?.status}</h1>
            <span>{error?.statusText}</span>
        </div>
    );
}

export default ErrorBoundaryLayout;