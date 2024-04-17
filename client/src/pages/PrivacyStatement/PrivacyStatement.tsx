import { CorporateInfoBlock, UniversalSection } from "@/components";
import { content } from "./content";

const PrivacyStatement = () => {
	return (
		<UniversalSection theme="light" title="Privacy Statement">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default PrivacyStatement;
