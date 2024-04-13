import { CorporateInfoBlock, UniversalSection } from "@/components";
import { content } from "./content";

const LegalDisclaimer = () => {
	return (
		<UniversalSection theme="light" title="Legal Notice">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default LegalDisclaimer;
