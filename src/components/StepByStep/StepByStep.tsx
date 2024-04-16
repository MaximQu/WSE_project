import Clarification from "../Clarification/Clarification";
import { steps } from "./content";
import st from "./styles.module.scss";
const StepByStep = () => {
	return (
		<div className={st.steps}>
			{steps.map((step) => (
				<Clarification
					key={step.title}
					{...step}
					theme="light"
					clarificationClass={st.step}
					titleClass={st.title}
          textClass={st.text}
				/>
			))}
		</div>
	);
};
export default StepByStep;
