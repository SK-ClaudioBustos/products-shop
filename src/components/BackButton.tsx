import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../styles/backButton.css";

export const BackButton = () => {
    return (
        <div className="back-button-container">
            <button type='button' id="back-button" onClick={() => history.back()}>
                <ArrowBackIcon fontSize='large' />
            </button>
        </div>
    );
}