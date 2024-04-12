import { Advantage, Clarification, EmailForm } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { benefits, hero, statement } from "./content";
import st from "./styles.module.scss";
import { AdaptiveImg } from "@/ui";

const Affiliation = () => {
	return (
		<main>
			<UniversalSection theme="light" className={st.sendEmail}>
				<Clarification
					skewed
					theme="light"
					className={st.wrapper}
					title={hero.title}
					text={hero.text}
				/>
				<div>
					<AdaptiveImg {...hero.img1}/>
					<AdaptiveImg {...hero.img2}/>
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
				<Clarification
					className={st.wrapper}
					text={statement}
				/>
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
		</main>
	);
};

export default Affiliation;
