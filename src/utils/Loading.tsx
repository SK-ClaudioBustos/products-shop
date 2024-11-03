import "../styles/loading.css";

interface LoadingProps {
    descripcion?: string
}
const Loading = ({ descripcion = "Cargando" }: LoadingProps) => {
    return (
        <div className='container'>
            <span className='loading-description'><b>{descripcion}</b></span>
            <div className="circular-loading">
                <div className='loading-point'></div>
                <div className='loading-point'></div>
            </div>
        </div>
    )
}

export default Loading