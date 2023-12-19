import backgroundImage from "../../assets/images/background.svg";
import { getColor } from "../../utils/helpers";
import {ScProductBox, ScImg} from "./ProductStyle"

export default function Product({
	product,
	categorySelected,
	setProductsOrdered,
	openReviewOrder,
}) {
    
	function selectProduct() {
		setProductsOrdered((prev) => {
			if (!prev) return [product];
			return [...prev, product];
		});
		openReviewOrder();
	}

	return (
		(categorySelected === "" || categorySelected === product.category) && (
			<ScProductBox
				onClick={selectProduct}
				category={product.category}
				bgColor={getColor(product.category)}
			>
				<img src={backgroundImage} alt="Product Background" />
				<div>
					<p>{product.name}</p>
					<p>{product.description.split(",")[0]}</p>
					<p>
						R${product.price.toString().slice(0, -2)},
						{product.price.toString().slice(-2)}
					</p>
				</div>
				<ScImg src={product.image} />
			</ScProductBox>
		)
	);
}