import Footer from '@components/footer';
import Header from '@components/header';
import Navbar from '@components/navbar';

interface IProps {
	children: React.ReactNode;
}

export default function HomeLayout({ children }: IProps) {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className='mt-10'>
				<Navbar />
			</div>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
