import { Clarification, Dropdown } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { AdaptiveImg, ButtonOrLink } from "@/ui";
import {
	ScreenerWidget,
	SymbolInfoWidget,
	TickerTapeWidget,
} from "@/ui/Widgets/TradingViewWidgets";
import { faqList, investments } from "./content";
import st from "./styles.module.scss";
import {
	skyscraperDesktopJPG,
	skyscraperMobileJPG,
	skyscraperTabletJPG,
} from "@/assets/img/jpg";

const Market = () => {
	return (
		<main>
			<UniversalSection>
				<Clarification
					skewed
					title={"Introduction \nto the Stock Market"}
					text="The stock market is a dynamic marketplace where investors buy and sell shares of publicly traded companies, driving economic growth and wealth creation. Whether you're new to investing or a seasoned trader, understanding the fundamentals of the stock market is essential for making informed financial decisions."
				/>
			</UniversalSection>
			<TickerTapeWidget isCompact />
			<UniversalSection
				className={st.marketData}
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
				className={st.offerList}
			>
				<div className={st.wrapper}>
					{["BLACKBULL:US30", "NASDAQ:AAPL", "NYSE:BA"].map((symbol) => (
						<div className={st.block} key={symbol}>
							<SymbolInfoWidget symbol={symbol} />
							<ButtonOrLink className={st.btn}>Trade</ButtonOrLink>
						</div>
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				title="Investing is easy"
				subtitle="Explore different approaches to investing in the stock market, each tailored to suit different financial goals and risk tolerances."
				className={st.investmentsBlock}
			>
				<div className={st.layout}>
					<div className={st.statements}>
						{investments.map((investment) => (
							<Clarification
								key={investment.title}
								subtitle={investment.title}
								text={investment.text}
							/>
						))}
					</div>
					<AdaptiveImg
						desktop={skyscraperDesktopJPG}
						tablet={skyscraperTabletJPG}
						mobile={skyscraperMobileJPG}
						switchToTabletWidth={960}
						switchToMobileWidth={584}
						alt="Investments"
						className={st.img}
					/>
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.faq}
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Answers to your burning questions about the Stock Market"
			>
				<div className={st.list}>
					{faqList.map((item) => (
						<Dropdown key={item.answer} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.startSection}
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

export default Market;
