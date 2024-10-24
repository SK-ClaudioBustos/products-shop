import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

interface LoadingProps {
    descripcion: string
}
const Loading = ({ descripcion }: LoadingProps) => {
    return (
        <div className='container'>
            <HourglassEmptyIcon fontSize='large' />
            <span>{descripcion}</span>
        </div>
    )
}

export default Loading