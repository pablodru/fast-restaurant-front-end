import { ScOrderBlock } from "./ProductOrderStyle";

export default function ProductOrder({ product }) {
    const formattedPrice = product.additionalId ? "100" : product.price;
    const name = product.additionalId ? product.additional.name : product.name
	return (
		<ScOrderBlock>
			<p>1x {name}</p>
			<p>
				R${formattedPrice.toString().slice(0, -2)},
				{formattedPrice.toString().slice(-2)}
			</p>
		</ScOrderBlock>
	);
}