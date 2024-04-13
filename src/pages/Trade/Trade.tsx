import { Clarification, TestimonialSlider, UniversalSection } from "@/components";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import {
	RealTimeChartWidget,
	TickerTapeWidget,
} from "@/ui/Widgets/TradingViewWidgets";
import { wseDescription } from "./content";
import st from "./styles.module.scss";

const Trade = () => {
	return (
		<main>
			<UniversalSection
				className={st.wseDescription}
				theme="light"
				title="Trading with WSE"
				subtitle="Embark on an exciting journey into the world of stock trading with WSE"
			>
				<div className={st.content}>
					<div className={st.wrapper}>
						<Clarification
							className={st.block}
							theme="light"
							{...wseDescription.navigating}
						/>
						<Clarification
							className={st.block}
							theme="light"
							{...wseDescription.exploring}
						/>
					</div>
					<AdaptiveImg {...wseDescription.img} className={st.img} />
				</div>
			</UniversalSection>
			<TickerTapeWidget className={st.tickerTapeWidget} />
			<UniversalSection className={st.testimonialsBlock}>
				<TestimonialSlider />
			</UniversalSection>
			<UniversalSection theme="light">
				<RealTimeChartWidget />
			</UniversalSection>
			<UniversalSection
				className={st.account}
				theme="light"
				title="Create your account today!"
				subtitle="Easy way to Great benefits!"
			>
				<MultipleButtons className={st.block} />
			</UniversalSection>
		</main>
	);
};

export default Trade;
