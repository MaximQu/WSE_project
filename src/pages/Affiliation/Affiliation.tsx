import { Advantage, Clarification } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";

import st from "./styles.module.scss";
import { content } from "./content";

const Affiliation = () => {
	return (
		<main>
			<UniversalSection className={st.description}>
				<Clarification
					className={st.wrapper}
					text1="At World Stock Exchange (WSE), we understand the value of collaboration in expanding our reach and connecting with traders and investors worldwide. "
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
					{content.benefits.map((item) => (
						<Advantage theme="light" data={item} />
					))}
				</div>
			</UniversalSection>
		</main>
	);
};

export default Affiliation;
