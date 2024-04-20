import { highFiveSVG } from "@/assets/img/svg";
import { Advantage, Clarification, Stat, UniversalSection } from "@/components";
import { AdaptiveImg, ButtonOrLink } from "@/ui";
import { advantages, explanations, stats } from "./content";
import st from "./styles.module.scss";
import {
	laptopDesktopJPG,
	laptopMobileJPG,
	laptopTabletJPG,
} from "@/assets/img/jpg";

const WhyGSM = () => {
	return (
		<main>
			<UniversalSection>
				<Clarification
					type="skewed"
					title="Why GSM?"
					text={`At GSM, we pride ourselves on offering a comprehensive platform designed to unlock exclusive investment opportunities and empower investors to achieve their financial goals.\n\nHere are just a few reasons why you should choose GSM:`}
				/>
			</UniversalSection>
			<UniversalSection className={st.advantagesBlock}>
				<div className={st.layout}>
					{advantages.map((advantage) => (
						<Advantage data={advantage} key={advantage.title} />
					))}
					<AdaptiveImg
						desktop={laptopDesktopJPG}
						tablet={laptopTabletJPG}
						mobile={laptopMobileJPG}
						alt={"Why GSM?"}
						switchToTabletWidth={885}
						className={st.img}
					/>
				</div>
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
				subtitle="At Global Stock Market (GSM), we pride ourselves on our robust foundation built upon several key strengths"
			>
				<div className={st.content}>
					<div className={st.wrapper}>
						{explanations.map((item) => (
							<Clarification
								clarificationClass={st.block}
								theme="light"
								key={item.subtitle}
								{...item}
							/>
						))}
					</div>
					<img className={st.img} src={highFiveSVG} alt="Our strength" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default WhyGSM;
