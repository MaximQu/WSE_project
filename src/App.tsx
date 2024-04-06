import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import MainLayout from "./layouts/MainLayout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/trade" element />
				<Route path="/sustainable" element />
				<Route path="/market" element />
				<Route path="/regulation" element />
				<Route path="/affiliation" element />
				<Route path="/private-markets" element />
				<Route path="/why-wse" element />
				<Route path="/contacts" element />
				<Route path="/auth" element>
					<Route path="sign-up" element />
					<Route path="sign-in" element />
				</Route>
				<Route path="/legal-notice" element />
				<Route path="/privacy-statement" element />
				<Route path="/copyright" element />
				<Route path="/about-us" element>
					<Route path="company-profile" element />
					<Route path="investor-relations" element />
				</Route>
				<Route path="*" element />
			</Route>
		</Routes>
	);
};
export default App;
