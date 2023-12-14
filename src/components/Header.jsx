import { styled } from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header () {
    const navigate = useNavigate();

    return (
        <ScHeader>
            <ScLogo>
                <FaHamburger style={{color:'#fff', width: '30px', height:'30px'}} />
                <p>fastfood</p>
            </ScLogo>
            <ScButtons>
                <p onClick={() => navigate('/')}>Pedidos</p>
                <p onClick={() => navigate('/kitchen')}>Cozinha</p>
                <p onClick={() => navigate('/orders')}>Retirada</p>
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
    gap:75px;
    p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }
`