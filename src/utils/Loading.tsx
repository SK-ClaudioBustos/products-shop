import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import "../styles/loading.css";

interface LoadingProps {
    descripcion: string
}
const Loading = ({ descripcion }: LoadingProps) => {
    return (
        <div className='loading-container'>
            <HourglassEmptyIcon fontSize='large' />
            <span>{descripcion}</span>
        </div>
    )
}

export default Loading