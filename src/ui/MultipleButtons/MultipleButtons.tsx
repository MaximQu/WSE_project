import { FC } from "react";
import ButtonOrLink from "../ButtonOrLink/ButtonOrLink";
import st from "./styles.module.scss";

type MultipleButtonsProps = {
	firstBtnText?: string;
	secondBtnText?: string;
	adjustment?: "center" | "right ";
};

const MultipleButtons: FC<MultipleButtonsProps> = ({
	firstBtnText,
	secondBtnText,
  adjustment
}) => {
	return (
		<div className={`${st.block} ${adjustment === 'center' ? st.center : st.right }`}>
			<ButtonOrLink as="a" to="/auth/sign-up">
				{firstBtnText}
			</ButtonOrLink>
			<ButtonOrLink as="a" to="/" styleType="frame">
				{secondBtnText}
			</ButtonOrLink>
		</div>
	);
};

export default MultipleButtons;
