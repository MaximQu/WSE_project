import { DropDown } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { ButtonOrLink } from "@/ui";
import {
  ScreenerWidget,
  SymbolInfoWidget,
  TickerTapeWidget,
} from "@/ui/Widgets/TradingViewWidgets";
import { content } from "./content";
import st from "./styles.module.scss";

const Market = () => {
	return (
		<main>
			<TickerTapeWidget isCompact />
			<UniversalSection
				theme="light"
				title="Market Data"
				subtitle="Browse or search the securities listed on The International Stock Exchange"
			>
				<ScreenerWidget />
			</UniversalSection>
			<UniversalSection
				theme="light"
				title="Get the best offer today"
				subtitle="Top-3 to invest today!"
			>
				<div className={st.widgetWrapper}>
					<div className={st.widgetBlock}>
						<SymbolInfoWidget />
						<ButtonOrLink className={st.widgetBtn}>Trade</ButtonOrLink>
					</div>
					<div className={st.widgetBlock}>
						<SymbolInfoWidget />
						<ButtonOrLink className={st.widgetBtn}>Trade</ButtonOrLink>
					</div>
					<div className={st.widgetBlock}>
						<SymbolInfoWidget />
						<ButtonOrLink className={st.widgetBtn}>Trade</ButtonOrLink>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection
				title="Investing is easy"
				subtitle="Explore different approaches to investing in the stock market, each tailored to suit different financial goals and risk tolerances."
			></UniversalSection>
			<UniversalSection
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Answers to your burning questions about the Stock Market"
			>
				<div className={st.faqList}>
					{content.map((item) => (
						<DropDown key={item.answer} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.startSection}
				title="Ready to start?"
				subtitle="Easy way to Great benefits!"
			>
				<ButtonOrLink className={st.startBtn} as="a" to="/auth/sign-up">
					Register account
				</ButtonOrLink>
			</UniversalSection>
		</main>
	);
};

export default Market;
