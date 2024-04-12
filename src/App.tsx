import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
	Affiliation,
	CompanyProfile,
	Contacts,
	Copyright,
	Home,
	InvestorRelations,
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

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route element={<MainLayout headerTheme="light" />}>
					<Route path="trade" element={<Trade />} />
					<Route path="sustainable" element={<Sustainable />} />
					<Route path="market" element={<Market />} />
					<Route path="regulation" element={<Regulation />} />
					<Route path="private-markets" element={<PrivateMarkets />} />
					<Route path="affiliation" element={<Affiliation />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="auth/sign-up" element={<Registration />} />
					<Route path="legal-notice" element={<LegalDisclaimer />} />
					<Route path="privacy-statement" element={<PrivacyStatement />} />
					<Route path="copyright" element={<Copyright />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="why-wse" element={<WhyWSE />} />
				</Route>
			</Route>
			<Route path="about-us">
				<Route element={<MainLayout headerTheme="light" />}>
					<Route path="company-profile" element={<CompanyProfile />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route path="investor-relations" element={<InvestorRelations />} />
				</Route>
			</Route>
		</Routes>
	);
};
export default App;
