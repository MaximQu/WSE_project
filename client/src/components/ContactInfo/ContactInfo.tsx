import { FC } from "react";
import st from "./styles.module.scss";
import { EmailIcon, PhoneIcon, MarkerIcon } from "@/ui/icons";

type ContactInfoProps = {
	className?: string;
};

const ContactInfo: FC<ContactInfoProps> = ({ className }) => {
	return (
		<div className={`${st.contactList} ${className}`}>
			<a href="mailto:info@globalstockmarket.org" className={st.block}>
				<div className={st.icon}>
					<EmailIcon />
				</div>
				<h2 className={st.heading}>Email</h2>
				<span className={st.value}>info@globalstockmarket.org </span>
			</a>
			<a href="tel:+4591987737" className={st.block}>
				<div className={st.icon}>
					<PhoneIcon />
				</div>
				<h2 className={st.heading}>Phone</h2>
				<span className={st.value}>+45-919-877-37</span>
			</a>
			<a href="#" className={st.block}>
				<div className={st.icon}>
					<MarkerIcon />
				</div>
				<h2 className={st.heading}>Office</h2>
				<address className={st.value}>Skovvej 93, 2920 Charlottenlund, Denmark</address>
			</a>
		</div>
	);
};

export default ContactInfo;
