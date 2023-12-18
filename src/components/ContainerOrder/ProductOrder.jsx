import { styled } from "styled-components";

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

const ScOrderBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 22px;
		font-weight: 500;
		color: #5e5d5d;
	}
    margin-bottom: 10px;
`;
