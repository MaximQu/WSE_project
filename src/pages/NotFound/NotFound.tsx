import { analyticsSVG } from "@/assets/img/svg";
import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";

const NotFound = () => {
	return (
		<section className={`${st.notFound} container`}>
			<div className={st.content}>
				<h1 className={st.title}>
					<span>404</span>
					Page not found
				</h1>
				<p className={st.text}>Something went wrong, so this page is broken.</p>
				<div className={st.wrapper}>
					<ButtonOrLink as="a" to='/' className={st.btn}>Go back to Homepage</ButtonOrLink>
					<ButtonOrLink as="a" to='/' styleType="frame" className={st.btn}>Try Again</ButtonOrLink>
				</div>
			</div>
      <img src={analyticsSVG} className={st.img} alt="Page not found" />
		</section>
	);
};

export default NotFound;
