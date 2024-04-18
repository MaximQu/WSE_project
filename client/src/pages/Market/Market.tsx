import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Clarification, Dropdown, UniversalSection } from "@/components";
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
import { Pagination } from "swiper/modules";

const Market = () => {
	return (
		<main>
			<UniversalSection className={st.introduction} theme="light">
				<Clarification
					clarificationClass={st.block}
					textClass={st.text}
					theme="light"
					type="skewed"
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
				<ScreenerWidget className={st.screenerWidget}/>
			</UniversalSection>
			<UniversalSection
				theme="light"
				title="Get the best offer today"
				subtitle="Top-3 to invest today!"
				className={st.offer}
			>
				<Swiper
					className={st.swiper}
					slidesPerView={"auto"}
          modules={[Pagination]}
					pagination={{ clickable: true }}
					breakpoints={{
						375: {
							enabled: false,
							slidesPerView: 1,
							modules: [],
						},
						575: {
							enabled: true,
							slidesPerView: "auto",
							spaceBetween: 25,
						},
					}}
				>
					{["BLACKBULL:US30", "NASDAQ:AAPL", "NYSE:BA"].map((symbol) => (
						<SwiperSlide className={st.slide} key={symbol}>
							<div className={st.block} key={symbol}>
								<SymbolInfoWidget symbol={symbol} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</UniversalSection>
			<UniversalSection
				title="Investing is easy"
				subtitle="Explore different approaches to investing in the stock market, each tailored to suit different financial goals and risk tolerances."
				className={st.investments}
			>
				<div className={st.layout}>
					<div className={st.wrapper}>
						{investments.map((investment) => (
							<Clarification
								clarificationClass={st.block}
								key={investment.title}
								subtitle={investment.title}
								text={investment.text}
								textClass={st.text}
							/>
						))}
					</div>
					<AdaptiveImg
						desktop={skyscraperDesktopJPG}
						tablet={skyscraperTabletJPG}
						mobile={skyscraperMobileJPG}
						switchToTabletWidth={991}
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
