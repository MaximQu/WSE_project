import { CorporateInfoBlock } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { content } from "./content";

const LegalDisclaimer = () => {
	return (
		<UniversalSection theme="light" title="Legal Notice">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default LegalDisclaimer;
