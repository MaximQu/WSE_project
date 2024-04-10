import { confidenceSVG } from "@/assets/img/svg";
import { Advantage, Clarification, Hero, Stat } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { MultipleButtons } from "@/ui";
import { TickerTapeWidget } from "@/ui/Widgets/TradingViewWidgets";
import { advantages, stats } from "./content";
import st from "./styles.module.scss";

const Home = () => {
	return (
		<main>
			<Hero />
			<UniversalSection theme="light">
				<div className={st.clarification}>
					<Clarification
						theme="light"
						title="Invest with Confidence"
						text1="At World Stock Exchange, we believe in democratizing access to global financial markets."
						text2="Whether you're an individual investor or a corporate entity, our platform offers a diverse array of investment opportunities to help you achieve your financial objectives."
					/>
					<img
						className={st.clarificationImg}
						src={confidenceSVG}
						alt="Invest with Confidence"
					/>
				</div>
			</UniversalSection>
			<UniversalSection
				title="We believe in the power of data"
				subtitle="Driving informed decisions, enhancing market intelligence, and ensuring unrivaled accuracy"
				theme="light"
				className={st.statsBlock}
			>
				<div className={st.layout}>
					{stats.map((stat) => (
						<Stat data={stat} key={stat.value} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				title="Why Choose WSE?"
				subtitle="Your gateway to Global Markets: trust, expertise, and security combined"
				className={st.advantagesBlock}
			>
				<div className={st.layout}>
					{advantages.map((advantage) => (
						<Advantage data={advantage} key={advantage.icon} />
					))}
				</div>
			</UniversalSection>
			<TickerTapeWidget />
			<UniversalSection theme="light">
				<div className={st.clarification}>
					<Clarification
          theme="light"
						title="Transform your idea into reality"
						text1="Discover the Difference with WSE. &nbsp; &nbsp; Create your account!"
					/>
					<MultipleButtons />
				</div>
			</UniversalSection>
		</main>
	);
};
export default Home;
