import { FC } from "react";
import st from "./styles.module.scss";

type ClarificationProps = {
	title?: string;
	text1?: string;
	text2?: string;
};

const Clarification: FC<ClarificationProps> = ({ title, text1, text2 }) => {
	return (
		<div className={st.clarification}>
			<h2 className={st.title}>{title}</h2>
			<p className={st.text}>{text1}</p>
			<p className={st.text}>{text2}</p>
		</div>
	);
};

export default Clarification;
