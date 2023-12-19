import { ScCategory } from "./CategoryStyle";

export default function Category(props) {
    const {image, category} = props.category
	const {setCategorySelected} = props;

	return (
		<ScCategory onClick={() => setCategorySelected(category)}>
			<img src={image} alt={category} />
			{category === "COMBO" && <p>Combos</p>}
            {category === "SIDE" && <p>Acompanhamentos</p>}
            {category === "DRINK" && <p>Bebidas</p>}
            {category === "DESSERT" && <p>Sobremesas</p>}
		</ScCategory>
	);
}
