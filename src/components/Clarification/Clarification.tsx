import { FC } from "react";
import st from "./styles.module.scss";

export type ClarificationProps = {
	title?: string;
	subtitle?: string;
	text?: string;
	clarificationClass?: string;
	titleClass?: string;
	subtitleClass?: string;
	textClass?: string;
	theme?: "light" | "dark";
	type?: "skewed" | "centered" | "default";
};

const Clarification: FC<ClarificationProps> = ({
	title,
	subtitle,
	text,
	clarificationClass = "",
	titleClass = "",
	subtitleClass = "",
	textClass = "",
	theme = "dark",
	type = "default",
}) => {
	return (
		<div
			className={`${st.clarification} ${theme === "light" ? st.light : ""} ${
				type === "skewed" ? st.skewed : ""
			} ${type === "centered" ? st.centered : ""} ${clarificationClass}`}
		>
			{title ? <h3 className={`${st.title} ${titleClass}`}>{title}</h3> : null}
			{subtitle ? (
				<p className={`${st.subtitle} ${subtitleClass}`}>{subtitle}</p>
			) : null}
			{text ? <p className={`${st.text} ${textClass}`}>{text}</p> : null}
		</div>
	);
};

export default Clarification;
