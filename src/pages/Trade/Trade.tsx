import { Clarification, SwiperSlider } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import st from "./styles.module.scss";
import {
	glassesDesktopJPG,
	glassesMobileJPG,
	glassesTabletJPG,
} from "@/assets/img/jpg";
import { TickerTapeWidget } from "@/ui/Widgets/TradingViewWidgets";

const Trade = () => {
	return (
		<main>
			<UniversalSection
				theme="light"
				title="Trading with WSE"
				subtitle="Embark on an exciting journey into the world of stock trading with WSE"
			>
				<div className={st.content}>
					<div className={st.wrapper}>
						<Clarification
							title="Navigating the Exchange: On-Market Trading Explained"
							subTitle="Unlocking transparency, liquidity, and price efficiency in financial markets."
							text1="On-market trading refers to the buying and selling of financial instruments, such as stocks or ETFs, through a centralized exchange platform. In this type of trading, transactions are executed directly on the exchange, and prices are determined by supply and demand dynamics in real-time. "
							text2="On-market trading offers transparency, liquidity, and price efficiency, as orders are matched electronically based on prevailing market prices. Traders can access a wide range of investment opportunities and benefit from competitive pricing and immediate execution of trades."
						/>
						<Clarification
							title="Exploring Beyond the Exchange: Off-Market Trading Unveiled"
							subTitle="Discovering flexibility, customization, and niche market opportunities."
							text1="Off-market trading, also known as over-the-counter (OTC) trading, occurs directly between parties outside of a centralized exchange. In this type of trading, buyers and sellers negotiate prices and terms privately, often facilitated by brokers or dealers. Off-market trading offers flexibility and customization, as transactions can involve unique or specialized financial instruments that may not be available on traditional exchanges."
							text2="While off-market trading may lack the transparency and liquidity of on-market trading, it provides opportunities for tailored solutions and access to niche markets. It is commonly used for trading securities that are not listed on formal exchanges, such as bonds, derivatives, and certain types of equities."
						/>
					</div>
					<picture>
						<source
							srcSet={glassesMobileJPG}
							media="(max-width: 480px)"
							type="image/jpg"
						/>
						<source
							srcSet={glassesTabletJPG}
							media="(max-width: 768px)"
							type="image/jpg"
						/>
						<img
							className={st.img}
							src={glassesDesktopJPG}
							alt="Sign up to your account"
						/>
					</picture>
				</div>
			</UniversalSection>
      <TickerTapeWidget className={st.tickerTapeWidget}/>
			<SwiperSlider />
		</main>
	);
};

export default Trade;