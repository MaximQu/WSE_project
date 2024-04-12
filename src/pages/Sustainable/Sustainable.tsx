import st from "./styles.module.scss";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { Advantage, Clarification, Dropdown } from "@/components";
import {
	solarPanelFieldDesktopJPG,
	solarPanelFieldMobileJPG,
	solarPanelFieldTabletJPG,
	windFarmDesktopJPG,
	windFarmMobileJPG,
	windFarmTabletJPG,
} from "@/assets/img/jpg";
import { RealTimeChartWidget } from "@/ui/Widgets/TradingViewWidgets";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import { advantages, faq_content } from "./content";

const Sustainable = () => {
	return (
		<main>
			<UniversalSection className={st.sustainableBlock} theme="light">
				<div className={st.wrapper}>
					<Clarification
						className={st.block}
						theme="light"
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
			<UniversalSection theme="light">
				<RealTimeChartWidget />
			</UniversalSection>
			<UniversalSection
				title="Advantages"
				subtitle="Discover the benefits of sustainability"
				className={st.advantagesBlock}
			>
				<div className={st.layout}>
					{advantages.map((advantage) => (
						<Advantage data={advantage} key={advantage.title} />
					))}
					<AdaptiveImg
						desktop={solarPanelFieldDesktopJPG}
						tablet={solarPanelFieldTabletJPG}
						mobile={solarPanelFieldMobileJPG}
						alt={"Solar panel field"}
            switchToTabletWidth={885}
						className={st.img}
					/>
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.faq}
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Exploring common queries: Your comprehensive guide to frequently asked questions about sustainability and investing with world stock exchange"
			>
				<div className={st.list}>
					{faq_content.map((item) => (
						<Dropdown key={item.answer} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.account}
				title="Create your account today!"
				subtitle="Easy way to Great benefits!"
			>
				<MultipleButtons />
			</UniversalSection>
		</main>
	);
};

export default Sustainable;
