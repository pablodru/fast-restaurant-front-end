import ProductOrder from "../ProductOrder/ProductOrder";
import { calculateTotalPrice } from "../../../utils/helpers";
import {ScContainer, ScBorder, ScTotal} from "./ContainerStyle";

export default function ContainerOrder({ apiResponseOrders, page }) {

	const price = calculateTotalPrice(apiResponseOrders);
	return (
		<>
			<ScContainer>
				{apiResponseOrders.map((order) => (
					<>
						{order.products.map((product) => (
							<ProductOrder key={product.id} product={product} />
						))}
						{order.orderAdditionals.map((additional) => (
							<ProductOrder key={additional.id} product={additional} />
						))}
					</>
				))}
				<ScBorder></ScBorder>
				<ScTotal page={page}>
					<p>Total do pedido:</p>
					<p>
						R$ {price===0 ? "0" : price.toString().slice(0, -2)},{price===0 ? "00" : price.toString().slice(-2)}
					</p>
				</ScTotal>
			</ScContainer>
		</>
	);
}