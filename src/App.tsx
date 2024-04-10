import { Route, Routes } from "react-router-dom";
import {
	Copyright,
	Home,
	LegalDisclaimer,
	Market,
	NotFound,
	PrivacyStatement,
	PrivateMarkets,
	Registration,
	Regulation,
	Sustainable,
	Trade,
} from "./pages";
import MainLayout from "./layouts/MainLayout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout headerTheme="light" />}>
				<Route path="trade" element={<Trade />} />
				<Route path="sustainable" element={<Sustainable />} />
				<Route path="legal-notice" element={<LegalDisclaimer />} />
				<Route path="privacy-statement" element={<PrivacyStatement />} />
				<Route path="copyright" element={<Copyright />} />
				<Route path="market" element={<Market />} />
				<Route path="regulation" element={<Regulation />} />
				<Route path="private-markets" element={<PrivateMarkets />} />
				<Route path="affiliation"/>
				<Route path="auth/sign-up" element={<Registration />} />
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="why-wse" element />
				<Route path="contacts" element />
				<Route path="about-us" element>
					<Route path="company-profile" element />
					<Route path="investor-relations" element />
				</Route>
			</Route>
		</Routes>
	);
};
export default App;
