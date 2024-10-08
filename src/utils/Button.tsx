import "../styles/button.css";
interface ButtonProps {
    label?: string;
    children?: React.ReactNode;
    handleOnClick?: () => void;
}
const Button = ({ children, label, handleOnClick }: ButtonProps) => {
    return (
        <button className="button" onClick={handleOnClick ?? undefined}>
            {children && children}
            {label && <span>{label}</span>}
        </button>
    )
}

export default Button