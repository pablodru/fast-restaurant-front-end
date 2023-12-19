import { useEffect, useState } from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import apiUtil from "../utils/api";

export default function OrdersPage() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const response = apiUtil.getOrdersClosed();
		response.then((res) => {
			setOrders(res);
		});
	}, []);

	return (
		<>
			<Header actualPage="order" />
			<ScPage>
				<ScSide>
					<ScPreparing>Preparando:</ScPreparing>
					{orders.map((order) => {
						if (!order.isReady) {
							return <ScNameNotReady>{order.customer}</ScNameNotReady>;
						}
					})}
				</ScSide>
				<ScBorder></ScBorder>
				<ScSide>
					<ScPreparing>Pronto:</ScPreparing>
					{orders.map((order) => {
						if (order.isReady) {
							return <ScNameReady>{order.customer}</ScNameReady>;
						}
					})}
				</ScSide>
			</ScPage>
		</>
	);
}

const ScNameNotReady = styled.p`
    font-family: "Roboto", sans-serif;
	font-size: 90px;
	font-weight: 800;
	color: #7e7b7b;
    margin-bottom: 20px;
`

const ScNameReady = styled.p`
    font-family: "Roboto", sans-serif;
	font-size: 90px;
	font-weight: 800;
	color: #023d0a;
    margin-bottom: 20px;
`

const ScBorder = styled.div`
	min-width: 5px;
	min-height: 100%;
	background-color: #000;
`;

const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;
`;

const ScSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 50%;
	height: 50%;
`;

const ScPreparing = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 48px;
	font-weight: 800;
	color: #000;
`;
