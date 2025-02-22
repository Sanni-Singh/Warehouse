import { useNavigate } from 'react-router-dom';
import './WarehouseCart.css'

const WarehouseCart = ({name,city , type , space_available,id})=>{
    const navigate = useNavigate();
    return(
        <div className='cart' onClick={()=> navigate(`/cartDetails/${id}`)}>
            <h3>{name}</h3>
            <div className='city-type'>
                <p>{city}</p>
                <p>{type}</p>
            </div>
            <p>Space Available: <span className='space'>{space_available} sq. ft.</span></p>
        </div>
    )
}
export default WarehouseCart;