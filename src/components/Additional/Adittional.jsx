import { useState } from "react";
import {ScBox, ScAdditionalInfos, ScInfos, ScPriceSelect, ScButton} from "./AdditionalStyle";

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