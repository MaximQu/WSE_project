import { FC } from "react";
import st from "./styles.module.scss";

type ClarificationProps = {
	title?: string;
	subTitle?: string;
	text1?: string;
	text2?: string;
};

const Clarification: FC<ClarificationProps> = ({
	title,
	subTitle,
	text1,
	text2,
}) => {
	return (
		<div className={st.clarification}>
			<h2 className={st.title}>{title}</h2>
			{subTitle && <p className={st.subtitle}>{subTitle}</p>}
			<div className={st.wrapper}>
				<p className={st.text}>{text1}</p>
				<p className={st.text}>{text2}</p>
			</div>
		</div>
	);
};

export default Clarification;
