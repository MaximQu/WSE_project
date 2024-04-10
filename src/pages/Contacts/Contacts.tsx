import { contactsSVG } from "@/assets/img/svg";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { EmailIcon, MarkerIcon, PhoneIcon } from "@/ui/icons";
import st from "./styles.module.scss";

const Contacts = () => {
	return (
		<main>
			<UniversalSection theme="light" className={st.contact} title="Contacts">
				<div className={st.content}>
					<div className={st.contactList}>
						<a href="mailto:" className={st.block}>
							<div className={st.icon}>
								<EmailIcon />
							</div>
							<h2 className={st.heading}>Email</h2>
							<span className={st.value}>email@gmail.com</span>
						</a>
						<a href="tel:" className={st.block}>
							<div className={st.icon}>
								<PhoneIcon />
							</div>
							<h2 className={st.heading}>Phone</h2>
							<span className={st.value}>+00-000-000-00</span>
						</a>
						<a href="#" className={st.block}>
							<div className={st.icon}>
								<MarkerIcon />
							</div>
							<h2 className={st.heading}>Office</h2>
							<address className={st.value}>Address</address>
						</a>
					</div>
					<img className={st.img} src={contactsSVG} alt="Contact" />
				</div>
			</UniversalSection>
		</main>
	);
};

export default Contacts;
