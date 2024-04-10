import { Route, Routes } from "react-router-dom";
import {
	Affiliation,
	CompanyProfile,
	Contacts,
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
	WhyWSE,
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
				<Route path="affiliation" element={<Affiliation />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="auth/sign-up" element={<Registration />} />
				<Route path="about-us">
					<Route path="company-profile" element={<CompanyProfile />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="why-wse" element={<WhyWSE />} />
				{/* <Route path="about-us" element>
					<Route path="investor-relations" element />
				</Route> */}
			</Route>
		</Routes>
	);
};
export default App;
