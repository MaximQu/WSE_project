import { contactsSVG } from "@/assets/img/svg";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import st from "./styles.module.scss";
import { ContactInfo } from "@/components";

const Contacts = () => {
	return (
		<main>
			<UniversalSection theme="light" className={st.contact} title="Contacts">
				<div className={st.content}>
					<ContactInfo />
					<img className={st.img} src={contactsSVG} alt="Contact" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default Contacts;
