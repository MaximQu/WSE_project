import { Advantage, Hero, Stat } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { advantages, stats } from "./content";
import st from "./styles.module.scss";
import { TickerTapeWidget } from "@/ui/Widgets/TradingViewWidgets";

const Home = () => {
	return (
		<main>
			<Hero />
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
		</main>
	);
};
export default Home;
