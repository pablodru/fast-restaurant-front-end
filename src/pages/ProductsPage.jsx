import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { styled } from "styled-components";
import Category from "../components/Category";
import Product from "../components/Product";
import Swal from "sweetalert2";
import ReviewOrder from "../components/ReviewOrder";

export default function ProductsPage() {
	const [homeInfos, setHomeInfos] = useState([]);
	const [categorySelected, setCategorySelected] = useState("");
	const [productsOrdered, setProductsOrdered] = useState([]);
	const [additionalsOrdered, setAdditionalsOrdered] = useState([]);
	const [isReviewOrderVisible, setIsReviewOrderVisible] = useState(false);

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

	const openReviewOrder = () => {
		setIsReviewOrderVisible(true);
	};

	const closeReviewOrder = () => {
		setIsReviewOrderVisible(false);
		setProductsOrdered([]);
		setAdditionalsOrdered([]);
	};

	const getColor = (category) => {
		switch (category) {
			case "COMBO":
				return "#c04444";
			case "SIDE":
				return "#72ce5b";
			case "DRINK":
				return "#cec047";
			default:
				return "#4a69cf";
		}
	};

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
							return (
								<Category
									key={category.id}
									category={category}
									setCategorySelected={setCategorySelected}
								/>
							);
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
							return (
								<Product
									key={product.id}
									getColor={getColor}
									openReviewOrder={openReviewOrder}
									setProductsOrdered={setProductsOrdered}
									categorySelected={categorySelected}
									product={product}
								/>
							);
						})}
					</ScProducts>
				</ScBox>
				{isReviewOrderVisible && (
					<ReviewOrder
						additionalsOrdered={additionalsOrdered}
						setAdditionalsOrdered={setAdditionalsOrdered}
						setProductsOrdered={setProductsOrdered}
						getColor={getColor}
						product={productsOrdered[productsOrdered.length - 1]}
						productsOrdered={productsOrdered}
						additionals={homeInfos.additionals}
						closeReviewOrder={closeReviewOrder}
					/>
				)}
				{isReviewOrderVisible && <ScBackdrop onClick={closeReviewOrder} />}
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

const ScBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;
