import st from "./styles.module.scss";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { Clarification, DropDown } from "@/components";
import {
	windFarmDesktopJPG,
	windFarmMobileJPG,
	windFarmTabletJPG,
} from "@/assets/img/jpg";
import { RealTimeChartWidget } from "@/ui/Widgets/TradingViewWidgets";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import { content } from "./content";

const Sustainable = () => {
	return (
		<main>
			<UniversalSection theme="light">
				<div className={st.sustainableWrapper}>
					<Clarification
						title="Sustainable"
						text1="At World Stock Exchange, we are committed to promoting sustainability in the financial sector."
						text2="We recognize the importance of integrating environmental, social, and governance (ESG) considerations into our business practices and investment decisions"
					/>
					<AdaptiveImg
						desktop={windFarmDesktopJPG}
						tablet={windFarmTabletJPG}
						mobile={windFarmMobileJPG}
						alt="Sustainable"
						className={st.img}
					/>
				</div>
			</UniversalSection>
			<RealTimeChartWidget />
			<UniversalSection
				title="Advantages"
				subtitle="Discover the benefits of sustainability"
			></UniversalSection>
			<UniversalSection
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Exploring common queries: Your comprehensive guide to frequently asked questions about sustainability and investing with world stock exchange"
			>
				<div className={st.faqList}>
					{content.map((item) => (
						<DropDown key={item.answer} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.universalHeading}
				title="Create your account today!"
				subtitle="Easy way to Great benefits!"
			>
				<MultipleButtons />
			</UniversalSection>
		</main>
	);
};

export default Sustainable;
