import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { styled } from "styled-components";
import Category from "../components/Category";
import Product from "../components/Product";
import Swal from "sweetalert2";

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
				<ScBox>
					<ScTitleBox>
						<p>Categorias</p>
						<p>Navegue por categoria</p>
					</ScTitleBox>
					<ScCategories>
						{categoriesArray.map((category) => {
							return <Category key={category.id} category={category} />;
						})}
					</ScCategories>
				</ScBox>
				<ScBox>
					<ScTitleBox>
						<p>Produtos</p>
						<p>Selecione um produto para adicionar ao seu pedido</p>
					</ScTitleBox>
					<ScProducts>
						{homeInfos.products.map((product) => {
							return <Product key={product.id} product={product} />;
						})}
					</ScProducts>
				</ScBox>
			</ScPage>
		</>
	);
}

const ScPage = styled.div`
	padding: 60px 250px;
	display: flex;
	flex-direction: column;
	gap: 80px;
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

const ScBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const ScTitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
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

const ScCategories = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ScProducts = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 70px;
`;
