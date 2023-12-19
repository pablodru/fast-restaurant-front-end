import { FaCreditCard, FaMoneyBill } from "react-icons/fa";
import {ScBox, ScInfos, ScPriceSelect, ScButton} from "./PaymentStyle";

export default function Payment({ mode, isSelected, onSelect }) {
	function selectPayment() {
		onSelect(mode);
	}

	return (
		<ScBox selected={isSelected}>
			<ScInfos>
				{mode !== "Dinheiro" && (
					<FaCreditCard
						style={{ width: "30px", height: "30px", color: "#023d0a" }}
					/>
				)}
				{mode === "Dinheiro" && (
					<FaMoneyBill
						style={{ width: "30px", height: "30px", color: "#023d0a" }}
					/>
				)}
				<p>{mode}</p>
			</ScInfos>
			<ScPriceSelect>
				<ScButton onClick={selectPayment}>{isSelected && <div></div>}</ScButton>
			</ScPriceSelect>
		</ScBox>
	);
}
