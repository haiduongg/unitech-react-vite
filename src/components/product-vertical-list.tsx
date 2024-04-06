import ProductCard from "@components/product-card";
import { IProduct } from "@api/productApi";

export default function ProductVerticalList({ items, cols, productList }: { items?: number, cols?: string, productList: IProduct[] | null }) {
	const limitProduct = items ? productList?.slice(0, items) : productList
	console.log(limitProduct);

	return (
		<div className={`grid grid-cols-${cols || "3"} gap-8`}>
			{limitProduct?.map((_: IProduct, idx: number) => (
				<div key={idx}>
					<ProductCard product={_} />
				</div>
			))}
		</div>
	);
}