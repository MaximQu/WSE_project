import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import { Suspense } from "react";
import { Loading } from "./ui";

const InvestorRelations = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.InvestorRelations };
	}),
);
const Affiliation = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Affiliation };
	}),
);
const CompanyProfile = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.CompanyProfile };
	}),
);
const Contacts = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Contacts };
	}),
);
const Copyright = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Copyright };
	}),
);
const Home = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Home };
	}),
);
const LegalDisclaimer = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.LegalDisclaimer };
	}),
);
const Market = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Market };
	}),
);
const NotFound = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.NotFound };
	}),
);
const PrivacyStatement = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.PrivacyStatement };
	}),
);
const PrivateMarkets = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.PrivateMarkets };
	}),
);
const Registration = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Registration };
	}),
);
const LogIn = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.LogIn };
	}),
);
const Regulation = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Regulation };
	}),
);
const Sustainable = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Sustainable };
	}),
);
const Trade = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.Trade };
	}),
);
const WhyGSM = lazy(() =>
	import("./pages").then((module) => {
		return { default: module.WhyGSM };
	}),
);

const App = () => {
	return (
		<Routes>
			<Route path="/">
				<Route
					element={
						<Suspense fallback={<Loading />}>
							<MainLayout headerTheme="light" />
						</Suspense>
					}
				>
					<Route path="trade" element={<Trade />} />
					<Route path="sustainable" element={<Sustainable />} />
					<Route path="market" element={<Market />} />
					<Route path="regulation" element={<Regulation />} />
					<Route path="private-markets" element={<PrivateMarkets />} />
					<Route path="affiliation" element={<Affiliation />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="sign-up" element={<Registration />} />
					<Route path="log-in" element={<LogIn />} />
					<Route path="company-profile" element={<CompanyProfile />} />
					<Route path="legal-notice" element={<LegalDisclaimer />} />
					<Route path="privacy-statement" element={<PrivacyStatement />} />
					<Route path="copyright" element={<Copyright />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route
					element={
						<Suspense fallback={<Loading />}>
							<MainLayout />
						</Suspense>
					}
				>
					<Route index element={<Home />} />
					<Route path="why-gsm" element={<WhyGSM />} />
					<Route path="investor-relations" element={<InvestorRelations />} />
				</Route>
			</Route>
		</Routes>
	);
};
export default App;
