import { styled } from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header ({actualPage}) {
    const navigate = useNavigate();

    return (
        <ScHeader>
            <ScLogo>
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

const ScHeader = styled.div`
    width:100%;
    height: 80px;
    background-color: #0c5702;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 50px;
`

const ScLogo = styled.div`
    display:flex;;
    justify-content:center;
    align-items:center;
    gap:5px;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
    }
`

const ScButtons = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:70px;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        padding:10px 15px;
        cursor: pointer;
        border-radius: 10px;
    }
`

const ScProduct = styled.p`
    background-color: ${(props) => (props.actualPage==='product' ? '#023d0a' : '')};
`

const ScKitchen = styled.p`
    background-color: ${(props) => (props.actualPage==='kitchen' ? '#023d0a' : '')};
`

const ScOrder = styled.p`
    background-color: ${(props) => (props.actualPage==='order' ? '#023d0a' : '')};
`