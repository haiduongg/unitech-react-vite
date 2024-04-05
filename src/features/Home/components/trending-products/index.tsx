import { Button } from "@components/ui/Button";
import { FaChevronRight } from "react-icons/fa";
import ProductCard from "@components/product-card";

export default function TrendingProducts() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="text-md font-semibold">Trending Products</h3>
				<Button size={"sm"} variant={'outline'}>See more <FaChevronRight size={10} color="black" /></Button>
			</div>
			<div className="mt-8 grid grid-cols-4 gap-8">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}