import { styled } from "styled-components";
import ProductOrder from "./ProductOrder";

export default function ContainerOrder({ apiResponseOrders, page }) {

	const calculateTotalPrice = (orders) => {
        return orders.reduce((totalPrice, order) => {
          const orderTotal = order.products.reduce((productTotal, product) => {
            const productPrice = product.additionalId ? 100 : product.price;
            return productTotal + productPrice;
          }, 0);
      
          const additionalTotal = order.orderAdditionals.reduce((additionalTotal, additional) => {
            const additionalPrice = additional.additionalId ? 100 : additional.price;
            return additionalTotal + additionalPrice;
          }, 0);
      
          return totalPrice + orderTotal + additionalTotal;
        }, 0);
      };

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

const ScContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 50px;
	border: 2px solid #a8a5a5;
	border-radius: 10px;
`;

const ScBorder = styled.div`
	margin-top: 50px;
	margin-bottom: 20px;
	border: 2px dashed #a8a5a5;
`;

const ScTotal = styled.div`
	display: flex;
	flex-direction: ${props => props.page==="checkout" ? "row" : "column"};
	gap: 25px;
	justify-content: ${props => props.page==="checkout" ? 'space-between' : ""};
	p:nth-child(1) {
		font-family: "Roboto", sans-serif;
		font-size: 22px;
		font-weight: 500;
		color: #5e5d5d;
	}
	p:last-child {
		font-family: "Roboto", sans-serif;
		font-size: 30px;
		font-weight: 900;
		color: #000;
	}
`;
