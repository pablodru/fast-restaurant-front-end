import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import successImage from "../assets/images/success.png";
import { useNavigate } from "react-router-dom";

export default function Success({setClose}) {
    const navigate = useNavigate();

    function closeWindow() {
        navigate('/kitchen');
        setClose(false);
    }

	return (
		<ScBoxContainer>
			<IoClose
				style={{
					width: "30px",
					height: "30px",
					position: "absolute",
					top: "30px",
					right: "30px",
					color: "#9b9797",
                    cursor: 'pointer',
				}}
                onClick={closeWindow}
			/>
			<img src={successImage} alt="successImage" />
			<ScTitle>Pedido Finalizado com sucesso!</ScTitle>
            <p>O pedido foi encaminhado para a cozinha.</p>
		</ScBoxContainer>
	);
}

const ScBoxContainer = styled.div`
	z-index: 2;
	width: 40%;
	height: 50%;
	background-color: #fff;
	border-radius: 15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 30px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    gap: 20px;

	img {
		width: 100%;
		height: 70%;
		margin-top: 50px;
	}
    p {
        text-align: center;
    }
    p:last-child {
    font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 500;
	color: #6e6e6e; 
    }
`;

const ScTitle = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 32px;
	font-weight: 800;
	color: #000;
`;
