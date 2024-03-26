import { Outlet } from "react-router-dom";
import Header from '@components/landing/Header';

export default function LayoutLandingPage() {
	return (
		<div className="page">
			<Header />
			<Outlet />
		</div>
	);
}