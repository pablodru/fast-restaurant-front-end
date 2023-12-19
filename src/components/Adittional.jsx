import { useState } from "react";
import { styled } from "styled-components";

export default function Additional({
	additional,
	setAdditionalsOrdered,
	productId,
	additionalsOrdered,
}) {
	const [selected, setSelected] = useState(false);

	function selectAdditional() {
		if (!selected) {
			setAdditionalsOrdered((prev) => [
				...prev,
				{ productId, additional },
			]);
			setSelected((prev) => !prev);
			return;
		}
		const indexToRemove = additionalsOrdered.findIndex(
			(ordered) =>
				ordered.productId === productId &&
				ordered.additional.id === additional.id
		);
		if (indexToRemove !== -1) {
			const newAdditionalOrdered = [...additionalsOrdered];
			newAdditionalOrdered.splice(indexToRemove, 1);
			setAdditionalsOrdered(newAdditionalOrdered);
		}
		setSelected((prev) => !prev);
	}

	return (
		<ScBox>
			<ScAdditionalInfos>
				<div>
					<img src={additional.image} alt={additional.name} />
				</div>
				<ScInfos>
					<p>{additional.name}</p>
					<p>{additional.description}</p>
				</ScInfos>
			</ScAdditionalInfos>
			<ScPriceSelect>
				<p>
					R${additional.price.toString().slice(0, -2)},
					{additional.price.toString().slice(-2)}
				</p>
				<ScButton onClick={selectAdditional}>
					{selected && <div></div>}
				</ScButton>
			</ScPriceSelect>
		</ScBox>
	);
}

const ScBox = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ScAdditionalInfos = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;

	div:nth-child(1) {
		box-shadow: 0 4px 8px #e0dfdf;
		border-radius: 10px;
		img {
			width: 120px;
			height: 120px;
			object-fit: cover;
		}
	}
`;

const ScInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 20px;
	p:nth-child(1) {
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	p:nth-child(2) {
		font-family: "Roboto", sans-serif;
		font-size: 20px;
		font-weight: 400;
		color: #424141;
	}
`;

const ScPriceSelect = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 80px;
	p:nth-child(1) {
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 700;
		color: #747272;
	}
`;

const ScButton = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 20px;
	border: 1px solid #023d0a;
	padding: 2px;
	cursor: pointer;
	div {
		width: 100%;
		height: 100%;
		background-color: #023d0a;
		border-radius: 10px;
	}
`;
