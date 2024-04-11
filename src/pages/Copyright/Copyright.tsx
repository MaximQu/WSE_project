import { CorporateInfoBlock } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { content } from "./content";

const Copyright = () => {
	return (
		<UniversalSection theme="light" title="Copyright">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default Copyright;
