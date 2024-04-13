import { CorporateInfoBlock, UniversalSection } from "@/components";
import { content } from "./content";

const Copyright = () => {
	return (
		<UniversalSection theme="light" title="Copyright">
			<CorporateInfoBlock data={content} />
		</UniversalSection>
	);
};

export default Copyright;
