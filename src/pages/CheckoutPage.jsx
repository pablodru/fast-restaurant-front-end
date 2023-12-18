import { styled } from "styled-components";
import Header from "../components/Header";
import { useOrderContext } from "../contexts/ordersContext";
import { FaWallet } from "react-icons/fa";
import ContainerOrder from "../components/ContainerOrder/Container";
import apiUtil from "../utils/api";
import { useEffect } from "react";

export default function CheckoutPage() {
	const { orders, setOrders } = useOrderContext();

	useEffect(() => {
		if (orders.length === 0) {
			const response = apiUtil.getOrdersNotClosed();
			response.then((res) => {
				setOrders(res);
			});
		}
	}, []);

	return (
		<>
			<Header actualPage="product" />
			<ScPage>
				<ScLeft>
					<ScTitle>
						<FaWallet
							style={{ width: "40px", height: "40px", color: "#023d0a" }}
						/>
						<p>Pagamento</p>
					</ScTitle>
					<ScResume>
						<p>Resumo da compra</p>
						<ContainerOrder apiResponseOrders={orders} page={"checkout"} />
					</ScResume>
					<ScForm>
						<div>
							<label>Nome do cliente</label>
							<input type="text" placeholder="Primeiro nome" />
						</div>
						<div>
							<p>Código</p>
							<div>200</div>
						</div>
					</ScForm>
				</ScLeft>
			</ScPage>
		</>
	);
}

const ScForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    gap: 30px;
	div:first-child {
        width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		label {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		input {
			&::placeholder {
				font-family: "Roboto", sans-serif;
				font-size: 18px;
				font-weight: 500;
				color: #a3a1a1;
			}
            padding-left: 20px;
			background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
            border: none;
		}
	}
	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 10px;
		p {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		div {
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			font-weight: 500;
			color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
		}
	}
`;

const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ScLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 70px;
`;

const ScResume = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 24px;
		font-weight: 500;
		color: #000;
	}
`;

const ScTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 38px;
		font-weight: 700;
		color: #000;
	}
`;
