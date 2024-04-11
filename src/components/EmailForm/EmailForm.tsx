import { FC } from "react";
import st from "./styles.module.scss";
import { ButtonOrLink } from "@/ui";

type EmailFormProps = {
  className?: string
	btnText?: string;
};

const EmailForm: FC<EmailFormProps> = ({ btnText = " Join us",className }) => {
	return (
		<form className={`${st.form} ${className}`}>
			<div className={st.wrapper}>
				<input
					className={st.input}
					placeholder="Enter your email"
					name="emailConnection"
					type="email"
          required
				/>
				<ButtonOrLink className={st.btn} type="submit">
					{btnText}
				</ButtonOrLink>
			</div>
			<p className={st.subText}>
				We care about your data in our <span>privacy policy</span>
			</p>
		</form>
	);
};

export default EmailForm;
