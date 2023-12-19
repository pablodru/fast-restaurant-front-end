import { useEffect, useState } from "react";
import Header from "../../components/Header";
import apiUtil from "../../utils/api";
import { ScPage, ScSide, ScPreparing, ScNameNotReady, ScBorder, ScNameReady } from "./OrdersStyle"

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