import { FC, ReactNode } from "react";
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
	children?: ReactNode;
	styleType?: "fill" | "frame";
};

const styleTypes = {
	fill: st.fill,
	frame: st.frame,
};

const ButtonOrLink: FC<ButtonOrLinkProps> = ({
	styleType = "fill",
	children,
	...props
}) => {
	const styleClasses = `${st.btn} ${styleTypes[styleType]} text-md ${props.className}`;

	if (props.as === "a") {
		return (
			<Link {...props} className={styleClasses}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} type={props.type ?? "button"} className={styleClasses}>
			{children}
		</button>
	);
};
export default ButtonOrLink;
