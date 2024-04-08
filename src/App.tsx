import { Route, Routes } from "react-router-dom";
import {
	Copyright,
	Home,
	LegalDisclaimer,
	NotFound,
	PrivacyStatement,
} from "./pages";
import MainLayout from "./layouts/MainLayout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout headerTheme="light"/>}>
				<Route path="/legal-notice" element={<LegalDisclaimer />} />
				<Route path="/privacy-statement" element={<PrivacyStatement />} />
				<Route path="/copyright" element={<Copyright />} />
				<Route path="*" element={<NotFound />} />
			</Route>
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
				<Route path="/about-us" element>
					<Route path="company-profile" element />
					<Route path="investor-relations" element />
				</Route>
			</Route>
		</Routes>
	);
};
export default App;
