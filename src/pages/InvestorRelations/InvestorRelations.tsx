import { ContactInfo } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { ButtonOrLink } from "@/ui";
import { RealTimeChartWidget } from "@/ui/Widgets/TradingViewWidgets";
import st from "./styles.module.scss";

const InvestorRelations = () => {
	return (
		<main>
			<UniversalSection>
				<RealTimeChartWidget />
			</UniversalSection>
			<UniversalSection title="Financial performance"></UniversalSection>
			<UniversalSection theme="light" title="Contacts" className={st.contacts}>
				<ContactInfo className={st.wrapper} />
			</UniversalSection>
			<UniversalSection
				className={st.account}
				title="Ready to start?"
				subtitle="Easy way to Great benefits!"
			>
				<ButtonOrLink className={st.btn} as="a" to="/auth/sign-up">
					Register account
				</ButtonOrLink>
			</UniversalSection>
		</main>
	);
};

export default InvestorRelations;
