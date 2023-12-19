import { styled } from "styled-components";
import Header from "../components/Header";
import { useOrderContext } from "../contexts/ordersContext";
import { FaWallet } from "react-icons/fa";
import ContainerOrder from "../components/ContainerOrder/Container";
import apiUtil from "../utils/api";
import { useEffect, useState } from "react";
import Payment from "../components/Payment";
import { calculateTotalPrice, updateName } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Success from "../components/Success";

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

const ScBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;


const ScCancel = styled.button`
	border: ${(props) =>
		props.selectedPayment && props.name.length > 0
			? "1px solid #023d0a"
			: "1px solid #b4b0b0"};
	width: 300px;
	height: 50px;
	background-color: #fff;
	border-radius: 25px;
	color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#023d0a" : "#888585"};
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;
`;

const ScFinish = styled.button`
	border: ${(props) =>
		props.selectedPayment && props.name.length > 0
			? "1px solid #023d0a"
			: "1px solid #888585"};
	width: 300px;
	height: 50px;
	background-color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#023d0a" : "#888585"};
	border-radius: 25px;
	font-family: "Roboto", sans-serif;
	font-size: 22px;
	font-weight: 700;
	color: ${(props) =>
		props.selectedPayment && props.name.length > 0 ? "#fff" : "#000"};
`;

const ScButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;
	margin-top: 50px;
	button {
		cursor: pointer;
	}
`;

const ScInput = styled.input`
	&::placeholder {
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		font-weight: 500;
		color: #a3a1a1;
	}

	padding-left: 20px;
	background-color: #f7f3f3;
	border-radius: 10px;
	height: 40px;
	border: none;

	${({ value }) =>
		value.startsWith("R$ ") &&
		`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #000;
  `}
`;

const ScRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
	p:first-child {
		font-family: "Roboto", sans-serif;
		font-size: 22px;
		font-weight: 600;
		color: #000;
	}
`;

const ScForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30px;
	div:first-child {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		label {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		input {
			&::placeholder {
				font-family: "Roboto", sans-serif;
				font-size: 18px;
				font-weight: 500;
				color: #a3a1a1;
			}
			padding-left: 20px;
			background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
			border: none;
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}
	}
	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 10px;
		p {
			font-family: "Roboto", sans-serif;
			font-size: 22px;
			font-weight: 600;
			color: #000;
		}
		div {
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			font-weight: 500;
			color: #000;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f7f3f3;
			border-radius: 10px;
			height: 40px;
		}
	}
`;

const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	justify-content: space-between;
	gap: 150px;
`;

const ScLeft = styled.div`
	display: flex;
	flex-direction: column;
	gap: 70px;
	width: 50%;
`;

const ScResume = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 24px;
		font-weight: 500;
		color: #000;
	}
`;

const ScTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 60px 250px 0 250px;
	p {
		font-family: "Roboto", sans-serif;
		font-size: 38px;
		font-weight: 700;
		color: #000;
	}
`;
