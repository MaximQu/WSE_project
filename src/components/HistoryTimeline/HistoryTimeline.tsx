import Clarification from "../Clarification/Clarification";
import { eventDescriptions, timeEvents } from "./content";
import st from "./styles.module.scss";

const HistoryTimeline = () => {
	return (
		<div className={st.historyTimeline}>
			<div className={st.timeline}>
				{timeEvents.map((event) => (
					<>
						<Clarification
							clarificationClass={st.event}
							titleClass={st.eventTitle}
							subtitleClass={st.eventSubtitle}
							{...event}
						/>
						<b className={st.dotLine}/>
					</>
				))}
			</div>
			<div className={st.eventDescriptions}>
				{eventDescriptions.map((description) => (
					<p>{description}</p>
				))}
			</div>
		</div>
	);
};
export default HistoryTimeline;
