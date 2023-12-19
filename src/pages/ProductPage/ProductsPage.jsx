import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Swal from "sweetalert2";
import ReviewOrder from "../../components/ReviewOrder/ReviewOrder";
import apiUtil from "../../utils/api";
import ContainerOrder from "../../components/ContainerOrder/Container/Container";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../contexts/ordersContext";
import {
	ScButtons,
	ScWelcome,
	ScBox,
	ScTitleBox,
	ScCategories,
	ScProducts,
	ScCancel,
	ScFinish,
	ScBackdrop,
	ScPage,
} from "./ProductStyle";

export default function ProductsPage() {
	const { setOrders } = useOrderContext();
	const navigate = useNavigate();

	const [homeInfos, setHomeInfos] = useState([]);
	const [categorySelected, setCategorySelected] = useState("");
	const [productsOrdered, setProductsOrdered] = useState([]);
	const [additionalsOrdered, setAdditionalsOrdered] = useState([]);
	const [isReviewOrderVisible, setIsReviewOrderVisible] = useState(false);
	const [apiResponseOrders, setApiResponseOrders] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const fetchProducts = () => {
		const response = apiUtil.fetchProducts();
		response.then((res) => {
			setHomeInfos(res);
		});
		response.catch((err) => {
			Swal.fire({
				title: "Desculpe, não foi possível mostrar os produtos.",
				text: `${err.response.data.message}`,
				icon: "error",
				confirmButtonText: "Cool",
			});
		});
	};

	const fetchOrders = async () => {
		const response = await apiUtil.getOrdersNotClosed();
		if (!response) return;
		setApiResponseOrders(response);
		setOrders(response);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		fetchOrders();
	}, [isReviewOrderVisible]);

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
		fetchOrders();
	};

	async function cancelOrder() {
		await apiUtil.cancelOrder();
		setApiResponseOrders([]);
		setProductsOrdered([]);
		setAdditionalsOrdered([]);
		setOrders([]);
	}

	const filteredProducts = homeInfos.products.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Header actualPage="product" />
			<ScPage>
				<ScWelcome>
					<p>Seja bem vindo!</p>
					<input
						placeholder="O que você procura?"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
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
						{searchTerm.length===0 && (homeInfos.products.map((product) => {
							return (
								<Product
									key={product.id}
									openReviewOrder={openReviewOrder}
									setProductsOrdered={setProductsOrdered}
									categorySelected={categorySelected}
									product={product}
								/>
							);
						}))}

						{searchTerm.length>0 && (filteredProducts.map((product) => {
							return (
								<Product
									key={product.id}
									openReviewOrder={openReviewOrder}
									setProductsOrdered={setProductsOrdered}
									categorySelected={categorySelected}
									product={product}
								/>
							);
						}))}
					</ScProducts>
				</ScBox>
				<ContainerOrder
					page={"product"}
					apiResponseOrders={apiResponseOrders}
				/>
				<ScButtons>
					<ScCancel
						onClick={cancelOrder}
						disabled={!apiResponseOrders.length > 0}
						ordersLength={apiResponseOrders.length}
					>
						Cancelar
					</ScCancel>
					<ScFinish
						onClick={() => navigate("/checkout")}
						disabled={!apiResponseOrders.length > 0}
						ordersLength={apiResponseOrders.length}
					>
						Finalizar pedido
					</ScFinish>
				</ScButtons>
				{isReviewOrderVisible && (
					<ReviewOrder
						additionalsOrdered={additionalsOrdered}
						setAdditionalsOrdered={setAdditionalsOrdered}
						setProductsOrdered={setProductsOrdered}
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
