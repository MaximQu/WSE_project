import { Advantage, Clarification, EmailForm } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { benefits } from "./content";
import st from "./styles.module.scss";

const Affiliation = () => {
	return (
		<main>
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
					theme="dark"
					className={st.wrapper}
					text1="At World Stock Exchange (WSE), we understand the value of collaboration in expanding our reach and connecting with traders and investors worldwide."
					text2="Our affiliation with marketing affiliates is a key component of our strategy to promote our platform, attract new clients, and drive engagement within the financial community."
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
