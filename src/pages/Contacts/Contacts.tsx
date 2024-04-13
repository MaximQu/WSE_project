import { contactsSVG } from "@/assets/img/svg";
import { ContactInfo, UniversalSection } from "@/components";
import st from "./styles.module.scss";

const Contacts = () => {
	return (
		<main>
			<UniversalSection theme="light" className={st.contact} title="Contacts">
				<div className={st.content}>
					<ContactInfo className={st.list} />
					<img className={st.img} src={contactsSVG} alt="Contact" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default Contacts;
