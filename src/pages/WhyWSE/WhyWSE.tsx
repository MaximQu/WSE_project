import { highFiveSVG } from "@/assets/img/svg";
import { Clarification, Stat } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { ButtonOrLink } from "@/ui";
import { explanations, stats } from "./content";
import st from "./styles.module.scss";

const WhyWSE = () => {
	return (
		<main>
			<UniversalSection theme="light">
				<Clarification
					title="Why WSE?"
					text={`At WSE, we pride ourselves on offering a comprehensive platform designed to unlock exclusive investment opportunities and empower investors to achieve their financial goals.\n\nHere are just a few reasons why you should choose WSE:`}
				/>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.account}
				title="Create your account today!"
				subtitle="Easy way to Great benefits!"
			>
				<ButtonOrLink className={st.btn} as="a" to="/auth/sign-up">
					Register account
				</ButtonOrLink>
			</UniversalSection>
			<UniversalSection
				className={st.stats}
				title="Our numbers"
				subtitle="Unlocking opportunities, empowering investors: our impact"
			>
				<div className={st.block}>
					{stats.map((item) => (
						<Stat theme="dark" key={item.value} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.explanation}
				title="Our strength"
				subtitle="At World Stock Exchange (WSE), we pride ourselves on our robust foundation built upon several key strengths"
			>
				<div className={st.wrapper}>
					<div className={st.content}>
						{explanations.map((item) => (
							<Clarification theme="light" key={item.subtitle} {...item} />
						))}
					</div>
					<img src={highFiveSVG} alt="Our strength" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default WhyWSE;
