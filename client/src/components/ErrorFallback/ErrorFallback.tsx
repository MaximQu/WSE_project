import { FC } from "react";
import st from "./styles.module.scss";
import { ButtonOrLink } from "@/ui";

const ErrorFallback: FC = () => {
	return (
		<section className={`${st.errorBlock} container`}>
			<p className="">Something went wrong 😢</p>
      <ButtonOrLink className={st.btn} as="a" to='/'>Back</ButtonOrLink>
		</section>
	);
};
export default ErrorFallback;
