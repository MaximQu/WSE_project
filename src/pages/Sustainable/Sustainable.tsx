import st from "./styles.module.scss";
import { Advantage, Clarification, Dropdown, UniversalSection } from "@/components";
import {
	solarPanelFieldDesktopJPG,
	solarPanelFieldMobileJPG,
	solarPanelFieldTabletJPG,
} from "@/assets/img/jpg";
import { RealTimeChartWidget } from "@/ui/Widgets/TradingViewWidgets";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import { advantages, faq_content, sustainable } from "./content";

const Sustainable = () => {
	return (
		<main>
			<UniversalSection className={st.sustainableBlock} theme="light">
				<div className={st.wrapper}>
					<Clarification
						clarificationClass={st.block}
            titleClass={st.title}
            textClass={st.text}
						theme="light"
						{...sustainable.clarification}
					/>
					<AdaptiveImg {...sustainable.img} className={st.img} />
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
				<MultipleButtons className={st.block} />
			</UniversalSection>
		</main>
	);
};

export default Sustainable;
