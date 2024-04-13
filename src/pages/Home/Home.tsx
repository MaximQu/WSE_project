import { Advantage, Clarification, Hero, Stat, UniversalSection } from "@/components";
import { MultipleButtons } from "@/ui";
import { TickerTapeWidget } from "@/ui/Widgets/TradingViewWidgets";
import { advantages, confidence, stats, transformation } from "./content";
import st from "./styles.module.scss";

const Home = () => {
	return (
		<main>
			<Hero />
			<UniversalSection className={st.confidence} theme="light">
				<div className={st.wrapper}>
					<Clarification
						className={st.block}
						theme="light"
						title={confidence.title}
						text={confidence.text}
					/>
					<img className={st.img} {...confidence.img} />
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
			<UniversalSection className={st.transformation} theme="light">
				<div className={st.wrapper}>
					<Clarification
						className={st.block}
						theme="light"
						title={transformation.title}
						text={transformation.text}
					/>
					<MultipleButtons />
				</div>
			</UniversalSection>
		</main>
	);
};
export default Home;
