import { useEffect, useState } from "react";
import Header from "../components/Header";
import KitchenLogin from "../components/KitchenLogin";
import { styled } from "styled-components";
import KitchenOrder from "../components/KitchenOrder";
import apiUtil from "../utils/api";

export default function KitchenPage() {
	const [signed, setSigned] = useState(false);
	const [orders, setOrders] = useState([]);
	const [handleKitchenFeed, setHandleKitchenFeed] = useState(false);

	useEffect(() => {
		const response = apiUtil.getOrdersClosed();
		response.then(res => {
			setOrders(res)
		})
	}, [handleKitchenFeed]);

	return (
		<>
			<Header actualPage="kitchen" />
			{!signed && <KitchenLogin setSigned={setSigned} />}
			{signed && (
				<ScPage>
					<ScSide>
						<ScPreparing>Preparando:</ScPreparing>
						{orders.map(order => {
							if(!order.isReady){
							return (
								order.products.map(product => {
									return <KitchenOrder key={product.id} setHandleKitchenFeed={setHandleKitchenFeed} id={order.id} customer={order.customer} product={product} side="left" observation={order.observation} orderAdditionals={order.orderAdditionals} />
								})
							)}})}
					</ScSide>
					<ScBorder></ScBorder>
					<ScSide>
						<ScPreparing>Pronto:</ScPreparing>
						{orders.map(order => {
							if(order.isReady){
							return (
								order.products.map(product => {
									return <KitchenOrder key={product.id} setHandleKitchenFeed={setHandleKitchenFeed} id={order.id} customer={order.customer} product={product} side="right" observation={order.observation} orderAdditionals={order.orderAdditionals} />
								})
							)}})}
					</ScSide>
				</ScPage>
			)}
		</>
	);
}

const ScBorder = styled.div`
	min-width: 2px;
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
	font-size: 34px;
	font-weight: 800;
	color: #000;
`;
