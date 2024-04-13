import { Clarification, ContactInfo, Finances } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { AdaptiveImg, ButtonOrLink } from "@/ui";
import { RealTimeChartWidget } from "@/ui/Widgets/TradingViewWidgets";
import st from "./styles.module.scss";
import {
	chartDesktopJPG,
	chartMobileJPG,
	chartTabletJPG,
	moneyDesktopJPG,
	moneyMobileJPG,
	moneyTabletJPG,
	statsDesktopJPG,
	statsMobileJPG,
	statsTabletJPG,
} from "@/assets/img/jpg";
import { financesGroup } from "./content";

const InvestorRelations = () => {
	return (
		<main>
			<UniversalSection className={st.clarificationGroup}>
				<div className={st.content}>
					<Clarification
						className={st.firstBlock}
						text="Whether you're a current shareholder, a potential investor, or simply interested in learning more about our company, we invite you to explore the wealth of resources available here.
            From financial reports and stock information to corporate governance policies and investor events, we strive to provide the information you need to make informed decisions about your investment in World Stock Exchange."
						title="Welcome to Investor Relations at World Stock Exchange"
						subtitle={`At World Stock Exchange, we are committed to fostering transparency, accountability, and open communication with our investors and stakeholders.\n\nOur Investor Relations page serves as a central hub for providing timely and relevant information about our financial performance, corporate governance practices, and strategic initiatives.`}
					/>
					<div className={st.wrapper}>
						<Clarification
							className={st.secondBlock}
							title="Investor Engagement:"
							text={`At World Stock Exchange, we believe that meaningful engagement with our investors is essential to our long-term success. We are dedicated to listening to your feedback, addressing your concerns, and keeping you informed about our company's progress and strategic direction.\n Whether through regular communication channels, investor meetings, or industry conferences, we are committed to fostering a transparent and collaborative relationship with our investor community.`}
						/>
						<Clarification
							className={st.thirdBlock}
							title="Continuous Improvement:"
							text={`As we continue to grow and evolve, we are committed to continuously improving our Investor Relations page to better meet your needs. We welcome your suggestions for additional resources or information that would enhance your experience and help you make informed investment decisions. Together, we can navigate the dynamic landscape of the financial markets and work towards achieving our shared goals.\n Thank you for choosing World Stock Exchange as your trusted investment partner.`}
						/>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection>
				<RealTimeChartWidget />
			</UniversalSection>
			<UniversalSection theme="light" title="Financial performance">
				<div className={st.content}>
					<div className={st.wrapper}>
						<Finances data={financesGroup.highlights} />
						<AdaptiveImg
							desktop={statsDesktopJPG}
							tablet={statsTabletJPG}
							mobile={statsMobileJPG}
						/>
					</div>
					<div className={st.wrapper}>
						<AdaptiveImg
							desktop={moneyDesktopJPG}
							tablet={moneyTabletJPG}
							mobile={moneyMobileJPG}
						/>
						<Finances data={financesGroup.statements} />
					</div>
					<div className={st.wrapper}>
						<Finances data={financesGroup.reports} />
						<AdaptiveImg
							desktop={chartDesktopJPG}
							tablet={chartTabletJPG}
							mobile={chartMobileJPG}
						/>
					</div>
				</div>
			</UniversalSection>
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
