import { FC } from "react";
import ButtonOrLink from "../ButtonOrLink/ButtonOrLink";
import st from "./styles.module.scss";

type MultipleButtonsProps = {
	firstBtnText?: string;
	secondBtnText?: string;
  className?: string;
};

const MultipleButtons: FC<MultipleButtonsProps> = ({
	firstBtnText = "Register account",
	secondBtnText = "Learn more",
  className
}) => {
	return (
		<div className={`${st.block} ${className}`}>
			<ButtonOrLink className={st.btn} as="a" to="/auth/sign-up">
				{firstBtnText}
			</ButtonOrLink>
			<ButtonOrLink className={st.btn} as="a" to="/" styleType="frame">
				{secondBtnText}
			</ButtonOrLink>
		</div>
	);
};

export default MultipleButtons;
