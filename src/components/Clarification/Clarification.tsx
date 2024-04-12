import { FC } from "react";
import st from "./styles.module.scss";

export type ClarificationProps = {
	title?: string;
	subtitle?: string;
	text?: string;
	className?: string;
	theme?: "light" | "dark";
	skewed?: boolean;
};

const Clarification: FC<ClarificationProps> = ({
	title,
	subtitle,
	text,
	className = "",
	theme = "dark",
	skewed = false,
}) => {
	return (
		<div
			className={`
        ${st.clarification}
        ${theme === "light" ? st.light : ""}
        ${skewed ? st.skewed : ""}
        ${className}
      `}
		>
			{title ? <h2 className={st.title}>{title}</h2> : null}
			{subtitle ? <p className={st.subtitle}>{subtitle}</p> : null}
			{text ? <p className={st.text}>{text}</p> : null}
		</div>
	);
};

export default Clarification;
