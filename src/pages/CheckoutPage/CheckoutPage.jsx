import Header from "../../components/Header/Header";
import { useOrderContext } from "../../contexts/ordersContext";
import { FaWallet } from "react-icons/fa";
import ContainerOrder from "../../components/ContainerOrder/Container/Container";
import apiUtil from "../../utils/api";
import { useEffect, useState } from "react";
import Payment from "../../components/Payment/Payment";
import { calculateTotalPrice, updateName } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Success from "../../components/Success/Success";
import {ScBackdrop,	ScCancel,ScFinish,ScButtons,ScInput,ScRight,ScForm,	ScPage,	ScLeft,	ScResume,ScTitle, } from "./CheckoutStyle";

export default function CheckoutPage() {
	const { orders, setOrders } = useOrderContext();
	const navigate = useNavigate();

	const [codeNumber, setCodeNumber] = useState(0);
	const [name, setName] = useState("");
	const [selectedPayment, setSelectedPayment] = useState(null);
	const [customerValue, setCustomerValue] = useState("");
	const [close, setClose] = useState(false)
	const payment = ["Débito", "Crédito", "Dinheiro"];
	const totalPrice = calculateTotalPrice(orders);
	const changeValue =
		Number(customerValue.replace(",", ".")) - totalPrice / 100;

	useEffect(() => {
		if (orders.length === 0) {
			const response = apiUtil.getOrdersNotClosed();
			response.then((res) => {
				setOrders(res);
			});
		}
		const response = apiUtil.getCodeNumber();
		response.then((res) => setCodeNumber(res));
	}, []);

	function reset() {
		setName("");
		setCustomerValue("");
		setSelectedPayment(null);
		setOrders([]);
	}

	async function cancelOrder() {
		reset();
		await apiUtil.cancelOrder();
		navigate("/");
	}

	async function finishOrder() {
		if (selectedPayment==="Dinheiro" &&changeValue < 0) {
			return Swal.fire({
				title: "O valor entregue deve ser maior que o total.",
				icon: "error",
				confirmButtonText: "Ok!",
			});
		}
		await apiUtil.closeOrder(name);
		setClose(true);
		updateName(name);
		reset();
	}

	return (
		<>
			<Header actualPage="product" />
			<ScTitle>
				<FaWallet style={{ width: "40px", height: "40px", color: "#023d0a" }} />
				<p>Pagamento</p>
			</ScTitle>
			<ScPage>
				<ScLeft>
					<ScResume>
						<p>Resumo da compra</p>
						<ContainerOrder apiResponseOrders={orders} page={"checkout"} />
					</ScResume>
					<ScForm>
						<div>
							<label>Nome do cliente</label>
							<input
								type="text"
								placeholder="Primeiro nome"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<p>Código</p>
							<div>{codeNumber.codeNumber + 1}</div>
						</div>
					</ScForm>
				</ScLeft>
				<ScRight>
					<p>Selecione a forma de pagamento:</p>
					{payment.map((mode) => (
						<Payment
							key={mode}
							mode={mode}
							isSelected={selectedPayment === mode}
							onSelect={(selectedMode) => setSelectedPayment(selectedMode)}
						/>
					))}
					{selectedPayment === "Dinheiro" && (
						<ScForm>
							<div style={{ width: "50%" }}>
								<label>Valor entregue</label>
								<ScInput
									type="text"
									placeholder="R$ 0,00"
									value={`R$ ${customerValue}`}
									onChange={(e) => {
										const cleanedValue = e.target.value.replace(/[^\d,]/g, "");
										setCustomerValue(cleanedValue);
									}}
								/>
							</div>
							<div style={{ width: "50%" }}>
								<p>Troco</p>
								<div>R$ {changeValue.toFixed(2).replace(".", ",")}</div>
							</div>
						</ScForm>
					)}
					<ScButtons>
						<ScCancel
							onClick={cancelOrder}
							selectedPayment={selectedPayment}
							name={name}
						>
							Cancelar
						</ScCancel>
						<ScFinish
							onClick={finishOrder}
							disabled={!(selectedPayment && name.length > 0)}
							selectedPayment={selectedPayment}
							name={name}
						>
							Finalizar pedido
						</ScFinish>
					</ScButtons>
				</ScRight>
				{close && (<Success setClose={setClose} />)}
				{close && (<ScBackdrop></ScBackdrop>)}
			</ScPage>
		</>
	);
}