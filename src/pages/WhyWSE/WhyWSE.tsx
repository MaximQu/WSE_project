import UniversalSection from "@/components/UniversalSection/UniversalSection";
import st from "./styles.module.scss";
import { ButtonOrLink } from "@/ui";
import { content } from "./content";
import { Clarification, Stat } from "@/components";
import { highFiveSVG } from "@/assets/img/svg";

const WhyWSE = () => {
	return (
		<main>
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
					{content.stats.map((item) => (
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
						{content.explanation.map((item) => (
							<Clarification theme="light" key={item.title} subTitle={item.title} text1={item.text} />
						))}
					</div>
					<img src={highFiveSVG} alt="Our strength" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default WhyWSE;
