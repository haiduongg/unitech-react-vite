import Footer from "@components/footer";
import Header from "@components/header";
import Navbar from "@components/navbar";

interface IProps {
	children: React.ReactNode;
}

export default function DefaultLayout({ children }: IProps) {
	return (
		<>
			<header>
				<Header />
			</header>
			<Navbar />
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
