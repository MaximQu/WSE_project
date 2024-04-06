import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import st from "./styles.module.scss";

type ButtonOrLinkProps = (
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & {
			as?: "button";
	  })
	| (LinkProps & {
			as: "a";
	  })
) & {
	text?: string;
	styleType?: "fill" | "frame";
};

const styleTypes = {
	fill: st.fill,
	frame: st.frame,
};

const ButtonOrLink: FC<ButtonOrLinkProps> = ({
	styleType = "fill",
	text,
	...props
}) => {
	const styleClasses = `${st.btn} ${styleTypes[styleType]} fs-md ${props.className}`;

	if (props.as === "a") {
		return (
			<Link {...props} className={styleClasses}>
				{text}
			</Link>
		);
	}

	return (
		<button {...props} type={props.type ?? "button"} className={styleClasses}>
			{text}
		</button>
	);
};
export default ButtonOrLink;
