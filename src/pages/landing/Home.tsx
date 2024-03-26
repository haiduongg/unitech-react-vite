import DocumentTitle from "@components/DocumentTittle";
import CategoryMenu from "@components/landing/CategoryMenu";
import Navbar from "@components/landing/Navbar";

export default function Home() {
	return (
		<div className="mt-[100px]">
			<DocumentTitle title="Home page" />
			<Navbar />
			<CategoryMenu />
		</div>
	);
}