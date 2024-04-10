import { FC } from "react";
import st from "./styles.module.scss";

type ClarificationProps = {
	title?: string;
	subTitle?: string;
	text1?: string;
	text2?: string;
	className?: string;
	theme?: "light" | "dark";
};

const Clarification: FC<ClarificationProps> = ({
	title,
	subTitle,
	text1,
	text2,
	className,
	theme,
}) => {
	return (
		<div
			className={`${st.clarification} ${
				theme === "light" ? st.light : ""
			} ${className}`}
		>
			{title && <h2 className={st.title}>{title}</h2>}
			{subTitle && <p className={st.subtitle}>{subTitle}</p>}
			{text1 || text2 ? (
				<div className={st.wrapper}>
					<p className={st.text}>{text1}</p>
					<p className={st.text}>{text2}</p>
				</div>
			) : null}
		</div>
	);
};

export default Clarification;
