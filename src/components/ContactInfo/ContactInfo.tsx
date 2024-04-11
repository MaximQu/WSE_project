import { FC } from "react";
import st from "./styles.module.scss";
import { EmailIcon, PhoneIcon, MarkerIcon } from "@/ui/icons";

type ContactInfoProps = {
	className?: string;
};

const ContactInfo: FC<ContactInfoProps> = ({ className }) => {
	return (
		<div className={`${st.contactList} ${className}`}>
			<a href="mailto:" className={st.block}>
				<div className={st.icon}>
					<EmailIcon />
				</div>
				<h2 className={st.heading}>Email</h2>
				<span className={st.value}>email@gmail.com</span>
			</a>
			<a href="tel:+" className={st.block}>
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
	);
};

export default ContactInfo;
