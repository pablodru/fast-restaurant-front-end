import { IoClose } from "react-icons/io5";
import successImage from "../../assets/images/success.png";
import { useNavigate } from "react-router-dom";
import {ScBoxContainer, ScTitle} from "./SuccessStyle";

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