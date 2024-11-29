import { useRouteError } from "react-router-dom";
import "../styles/error.css";
import { BackButton } from "./BackButton";

interface Props {
    status?: string
    statusText?: string
}

export function ErrorBoundaryLayout({ status, statusText }: Props) {
    const error: any = useRouteError();
    return (
        <div className="error-container">
            <div>
                <BackButton />
            </div>
            <div>
                <h1>Error {" " + (status ?? error?.status)}</h1>
                <span>{statusText ?? error?.statusText}</span>
            </div>
        </div>
    );
}