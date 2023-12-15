import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { styled } from "styled-components";
import Category from "../components/Category";

export default function ProductsPage() {
	const [homeInfos, setHomeInfos] = useState([]);

	const fetchProducts = () => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/products`)
			.then((res) => {
				setHomeInfos(res.data);
			})
			.catch((err) => {
				Swal.fire({
					title: "Desculpe, não foi possível mostrar os produtos.",
					text: `${err.response.data.message}`,
					icon: "error",
					confirmButtonText: "Cool",
				});
			});
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	if (homeInfos.length === 0) return <p>Carregando</p>;

	const categoriesArray = [
		homeInfos.products[0],
		homeInfos.products[4],
		homeInfos.products[8],
		homeInfos.products[12],
	];
	console.log(categoriesArray);
	return (
		<>
			<Header actualPage="product" />
			<ScPage>
				<ScWelcome>
					<p>Seja bem vindo!</p>
					<input placeholder="O que você procura?" />
				</ScWelcome>
				<ScCategoryBox>
					<div>
						<p>Categorias</p>
						<p>Navegue por categoria</p>
					</div>
					<ScCategories>
						{categoriesArray.map((category) => {
							return <Category category={category} />;
						})}
					</ScCategories>
				</ScCategoryBox>
			</ScPage>
		</>
	);
}

const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	flex-direction: column;
	gap: 50px;
`;

const ScWelcome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;

	p {
		font-family: "Roboto", sans-serif;
		font-size: 30px;
		font-weight: 700;
		color: #000;
	}
	input {
		width: 350px;
		height: 50px;
		background-color: #f0f1ec;
		border: none;
		border-radius: 10px;
		padding-left: 20px;
		font-family: "Roboto";
		font-size: 18px;
		font-weight: 400;
		color: #8a8686;
	}
`;

const ScCategoryBox = styled.div`
	display: flex;
	flex-direction: column;
	gap:25px;
	div:nth-child(1) {
		display: flex;
		flex-direction: column;
		gap:10px;
		p:nth-child(1) {
			font-family: "Roboto";
			font-size: 28px;
			font-weight: 700;
			color: #000;
		}
		p:nth-child(2){
			font-family: "Roboto";
			font-size: 18px;
			font-weight: 400;
			color: #353434;
		}
	}
`;

const ScCategories = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
