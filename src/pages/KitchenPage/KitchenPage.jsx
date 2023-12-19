import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import KitchenLogin from "../../components/KitchenLogin/KitchenLogin";
import KitchenOrder from "../../components/KitchenOrder/KitchenOrder";
import apiUtil from "../../utils/api";
import { ScPage, ScSide, ScPreparing, ScBorder } from "./KitchenStyle";

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
