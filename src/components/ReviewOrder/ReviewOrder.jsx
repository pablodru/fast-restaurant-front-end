import { IoMdClose } from "react-icons/io";
import backgroundImage from "../../assets/images/background.svg";
import Additional from "../Additional/Adittional";
import { useState } from "react";
import { faker } from '@faker-js/faker';
import apiUtil from "../../utils/api";
import { getColor } from "../../utils/helpers";
import {ScOrderBox, ScTitleAdditionals	, ScTitle,ScProductInfos,	ScProductBox,ScImg,	ScNameDescription,ScNumberOrdered,ScPrice,ScAdittionalsBox,ScObservationBox,ScCommands,ScBorder,ScProductOrdered, ScButtons,ScContinue,ScAdd,} from "./ReviewOrderStyle";

export default function ReviewOrder({
	product,
	additionals,
	closeReviewOrder,
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
		const additionalsIds = additionalsOrdered?.map(additional => additional.additional.id);
		const existingName = JSON.parse(localStorage.getItem('data'));
		if (!existingName) {
			const name = faker.person.firstName();
			localStorage.setItem('data', JSON.stringify({name}));
			await apiUtil.createOrderNotClosed({productIds, additionalsIds, observation, name});
			return closeReviewOrder();
		}
		await apiUtil.createOrderNotClosed({productIds, additionalsIds, observation, name: existingName.name});
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
				<ScTitleAdditionals>Adicionais</ScTitleAdditionals>
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