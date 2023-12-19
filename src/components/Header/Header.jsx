import { FaHamburger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {ScHeader, ScLogo, ScButtons, ScProduct, ScKitchen, ScOrder} from "./HeaderStyle";

export default function Header ({actualPage}) {
    const navigate = useNavigate();

    return (
        <ScHeader>
            <ScLogo onClick={() => navigate('/')}>
                <FaHamburger style={{color:'#fff', width: '30px', height:'30px'}} />
                <p>fastfood</p>
            </ScLogo>
            <ScButtons>
                <ScProduct actualPage={actualPage} onClick={() => navigate('/')}>Pedidos</ScProduct>
                <ScKitchen actualPage={actualPage} onClick={() => navigate('/kitchen')}>Cozinha</ScKitchen>
                <ScOrder actualPage={actualPage} onClick={() => navigate('/orders')}>Retirada</ScOrder>
            </ScButtons>
        </ScHeader>
    )
}