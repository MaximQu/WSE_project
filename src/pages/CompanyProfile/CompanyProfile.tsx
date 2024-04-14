import {
	successDesktopJPG,
	successMobileJPG,
	successTabletJPG,
} from "@/assets/img/jpg";
import { puzzleSVG } from "@/assets/img/svg";
import { Advantage, Clarification, UniversalSection } from "@/components";
import { AdaptiveImg } from "@/ui";
import { company_values, hero, history } from "./content";
import st from "./styles.module.scss";
import HistoryTimeline from "@/components/HistoryTimeline/HistoryTimeline";

const CompanyProfile = () => {
	return (
		<main>
			<UniversalSection
				className={st.mission}
				theme="light"
				title="Mission of WSE"
			>
				<div className={st.content}>
					<Clarification
						clarificationClass={st.block}
						theme="light"
						title={hero.title}
						text={hero.text}
					/>
					<img className={st.img} src={puzzleSVG} alt="Mission of WSE" />
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.history}
				theme="light"
				title="Our history"
			>
				<div className={st.content}>
					<Clarification
						clarificationClass={st.block}
						theme="light"
						subtitle={history.subtitle}
						text={history.text}
					/>
					<AdaptiveImg className={st.img} {...history.img} />
				</div>
			</UniversalSection>
      <UniversalSection className={st.historyTimeline}>
        <HistoryTimeline />
      </UniversalSection>
			<UniversalSection
				theme="light"
				className={st.values}
				title="Company values"
			>
				<div className={st.wrapper}>
					<AdaptiveImg
						className={st.img}
						desktop={successDesktopJPG}
						tablet={successTabletJPG}
						mobile={successMobileJPG}
						alt="Company values"
					/>
					<ul className={st.list}>
						{company_values.map((item) => (
							<Advantage
								key={item.icon}
								theme="light"
								className={st.block}
								styleType="row"
								data={item}
							/>
						))}
					</ul>
				</div>
			</UniversalSection>
		</main>
	);
};

export default CompanyProfile;
