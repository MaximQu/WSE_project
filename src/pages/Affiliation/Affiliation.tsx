import { Advantage, Clarification, EmailForm } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { AdaptiveImg } from "@/ui";
import { benefits, hero, statement } from "./content";
import st from "./styles.module.scss";

const Affiliation = () => {
	return (
		<main>
			<UniversalSection theme="light" className={st.hero}>
				<Clarification
					skewed
					theme="light"
					className={st.wrapper}
					title={hero.title}
					text={hero.text}
				/>
				<div className={st.imgGroup}>
					<AdaptiveImg {...hero.img1} />
					<AdaptiveImg {...hero.img2} />
				</div>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.sendEmail}
				title="Want to connect with us?"
				subtitle="Join us and grow with us!"
			>
				<EmailForm />
			</UniversalSection>
			<UniversalSection className={st.description}>
				<Clarification className={st.wrapper} text={statement} />
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.benefits}
				title="Benefits of Affiliation"
				subtitle="Unlock exclusive benefits and opportunities"
			>
				<div className={st.wrapper}>
					{benefits.map((item) => (
						<Advantage key={item.icon} theme="light" data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				title="How to Become an Affiliate?"
				subtitle="Join our affiliate program in just a few easy steps"
				theme="light"
			></UniversalSection>
			<UniversalSection theme="light" className={st.sendEmail}>
				<EmailForm />
			</UniversalSection>
		</main>
	);
};

export default Affiliation;
