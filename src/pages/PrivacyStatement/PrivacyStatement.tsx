import { CorporateInfoBlock } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { content } from "./content";

const PrivacyStatement = () => {
	return (
		<UniversalSection theme="light" title="Privacy Statement">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default PrivacyStatement;
