import { styled } from "styled-components";
import { IoMdClose } from "react-icons/io";
import backgroundImage from "../assets/images/background.svg";
import Additional from "./Adittional";
import { useState } from "react";
import { faker } from '@faker-js/faker';
import apiUtil from "../utils/api";

export default function ReviewOrder({
	product,
	additionals,
	closeReviewOrder,
	getColor,
	productsOrdered,
	setProductsOrdered,
	setAdditionalsOrdered,
	additionalsOrdered,
}) {
	const productNumber = productsOrdered.filter(
		(ordered) => ordered.id === product.id
	).length;
	const actualPrice = product.price * productNumber;
	const totalPrice = actualPrice + additionalsOrdered.length * 100;
	const [observation, setObservation] = useState("");

	function handleRemoveProduct() {
		if (productsOrdered.length === 1) {
			setProductsOrdered([]);
			return closeReviewOrder();
		}

		const indexToRemove = productsOrdered.findIndex(
			(ordered) => ordered.id === product.id
		);
		if (indexToRemove !== -1) {
			const newProductsOrdered = [...productsOrdered];
			newProductsOrdered.splice(indexToRemove, 1);
			setProductsOrdered(newProductsOrdered);
		}
	}

	async function createOrder(){
		const productIds = productsOrdered.map(product => product.id);
		const additionalsIds = additionalsOrdered?.map(additional => additional.id);
		const existingName = localStorage.getItem('data');
		if (!existingName) {
			const name = faker.person.name();
			localStorage.setItem('data', JSON.stringify({name}));
			await apiUtil.createOrderNotClosed({productIds, additionalsIds, observation, name});
			return closeReviewOrder();
		}
		await apiUtil.createOrderNotClosed({productIds, additionalsIds, observation, name: existingName});
		return closeReviewOrder();
	}
	
	return (
		<ScOrderBox>
			<ScTitle>
				<h6>Revise seu Pedido</h6>
				<IoMdClose
					style={{
						width: "35px",
						height: "35px",
						color: "#746f6f",
						cursor: "pointer",
					}}
					onClick={closeReviewOrder}
				/>
			</ScTitle>
			<ScProductInfos>
				<ScProductBox
					category={product.category}
					bgColor={getColor(product.category)}
				>
					<img src={backgroundImage} alt="Product Background" />
					<div></div>
					<ScImg src={product.image} />
				</ScProductBox>
				<ScNameDescription>
					<p>{product.name}</p>
					<p>{product.description}</p>
					<ScNumberOrdered>
						<div onClick={handleRemoveProduct}>-</div>
						<p>{productNumber}</p>
						<div
							onClick={() => setProductsOrdered((prev) => [...prev, product])}
						>
							+
						</div>
					</ScNumberOrdered>
				</ScNameDescription>
				<ScPrice>
					R${actualPrice.toString().slice(0, -2)},
					{actualPrice.toString().slice(-2)}
				</ScPrice>
			</ScProductInfos>
			<ScAdittionalsBox>
				<p>Adicionais</p>
				<p>
					Selecione os ingredientes que você quer adicionar a mais no seu
					lanche.
				</p>
				{additionals.map((additional) => (
					<Additional
						key={additional.id}
						additional={additional}
						additionalsOrdered={additionalsOrdered}
						productId={product.id}
						setAdditionalsOrdered={setAdditionalsOrdered}
					/>
				))}
			</ScAdittionalsBox>
			<ScObservationBox>
				<p>Observações</p>
				<input
					value={observation}
					onChange={(e) => setObservation(e.target.value)}
					placeholder="Adicione uma observação ao Pedido"
				></input>
			</ScObservationBox>
			<ScCommands>
				<ScProductOrdered>
					<p>
						{productNumber}x {product.name}
					</p>
					<p>
						R${actualPrice.toString().slice(0, -2)},
						{actualPrice.toString().slice(-2)}
					</p>
				</ScProductOrdered>
				{additionalsOrdered.map((additionalOrdered) => {
					return (
						<ScProductOrdered>
							<p>1x {additionalOrdered.additional.name}</p>
							<p>
								R${additionalOrdered.additional.price.toString().slice(0, -2)},
								{additionalOrdered.additional.price.toString().slice(-2)}
							</p>
						</ScProductOrdered>
					);
				})}
				<ScBorder></ScBorder>
				<div>
					<p>Total do pedido:</p>
					<p>
						R$ {totalPrice.toString().slice(0, -2)},
						{totalPrice.toString().slice(-2)}
					</p>
				</div>
			</ScCommands>
			<ScButtons>
				<ScContinue onClick={createOrder} >Continuar Adicionando</ScContinue>
				<ScAdd onClick={createOrder} >Adicionar ao pedido</ScAdd>
			</ScButtons>
		</ScOrderBox>
	);
}

const ScOrderBox = styled.div`
	width: 60%;
	height: auto;
	background-color: #fff;
	z-index: 2;
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translate(-50%, 0);
	border-radius: 20px;
	overflow-y: auto;
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	overflow-y: auto;
`;

const ScTitle = styled.div`
	display: flex;
	justify-content: space-between;
	h6 {
		font-family: "Roboto", sans-serif;
		font-size: 38px;
		font-weight: 700;
		color: #000;
	}
`;

const ScProductInfos = styled.div`
	display: flex;
	gap: 30px;
	align-items: center;
	position: relative;
`;

const ScProductBox = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	box-shadow: 0 4px 8px #e0dfdf;
	background-color: ${(props) => props.bgColor};
	position: relative;
	img:nth-child(1) {
		width: 100%;
		border-radius: 10px;
	}
	div {
		width: 100%;
		height: 100px;
		background-color: #fff;
		border-radius: 10px;
		position: absolute;
		bottom: 0;
	}
`;

const ScImg = styled.img`
	border-radius: 15px;
	width: 150px;
	height: 150px;
	object-fit: scale-down;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ScNameDescription = styled.div`
	height: 200px;
	display: flex;
	flex-direction: column;
	gap: 15px;
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
		max-width: 250px;
		line-height: 30px;
	}
`;

const ScNumberOrdered = styled.div`
	width: 150px;
	height: 50px;
	border-radius: 25px;
	border: 2px solid #023d0a;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	div {
		width: 50px;
		height: 100%;
		border-radius: 20px;
		background-color: #023d0a;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "Roboto", sans-serif;
		font-size: 28px;
		font-weight: 600;
		color: #fff;
		cursor: pointer;
	}
`;

const ScPrice = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 28px;
	font-weight: 700;
	color: #000;
	position: absolute;
	right: 70px;
	top: 0;
`;

const ScAdittionalsBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	p:nth-child(1) {
		font-family: "Roboto";
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	p:nth-child(2) {
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 400;
		color: #353434;
	}
`;

const ScObservationBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	p:nth-child(1) {
		font-family: "Roboto";
		font-size: 28px;
		font-weight: 700;
		color: #000;
	}
	input {
		height: 100px;
		border: none;
		border-radius: 10px;
		background-color: #d8d4d4;
		padding: 10px;
		line-height: 1;
		&::placeholder {
			font-family: "Roboto";
			font-size: 20px;
			font-weight: 500;
			color: #8f8c8c;
		}
	}
`;

const ScCommands = styled.div`
	width: 100%;
	padding: 50px;
	border: 1px solid #a8a5a5;
	border-radius: 8px;
	div:last-child {
		display: flex;
		flex-direction: column;
		gap: 20px;
		p:nth-child(1) {
			font-family: "Roboto";
			font-size: 24px;
			font-weight: 400;
			color: #5f5d5d;
		}
		p:nth-child(2) {
			font-family: "Roboto";
			font-size: 40px;
			font-weight: 900;
			color: #000;
		}
	}
`;

const ScBorder = styled.div`
	margin-top: 50px;
	margin-bottom: 20px;
	border: 1.5px dashed #a8a5a5;
`;

const ScProductOrdered = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	p {
		font-family: "Roboto";
		font-size: 24px;
		font-weight: 400;
		color: #5f5d5d;
	}
`;

const ScButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 30px;
	button {
		width: 350px;
		height: 70px;
		border: 1px solid #023d0a;
		border-radius: 30px;
	}
`;
const ScContinue = styled.button`
	background-color: #fff;
	font-family: "Roboto";
	font-size: 24px;
	font-weight: 700;
	color: #023d0a;
`;

const ScAdd = styled.button`
	background-color: #023d0a;
    font-family: "Roboto";
	font-size: 24px;
	font-weight: 700;
	color: #fff;
`;
