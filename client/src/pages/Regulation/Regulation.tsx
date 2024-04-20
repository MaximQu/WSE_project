import {
	Clarification,
	Comment,
	EmailForm,
	UniversalSection,
} from "@/components";
import { AdaptiveImg } from "@/ui";
import {
	clarification_content,
	comments,
	explanations,
	regulations,
} from "./content";
import st from "./styles.module.scss";

const Regulation = () => {
	return (
		<main>
			<UniversalSection
				className={st.regulationInfo}
				theme="light"
				title="Regulations"
			>
				<div className={st.content}>
					<div className={`${st.wrapper} ${st.blockFirst}`}>
						<Clarification
							clarificationClass={`${st.block} `}
							titleClass={st.title}
							textClass={st.text}
							theme="light"
							{...regulations.framework1}
						/>
						<Clarification
							titleClass={st.title}
							textClass={st.text}
							clarificationClass={st.block}
							theme="light"
							{...regulations.framework2}
						/>
					</div>
					<AdaptiveImg
						className={`${st.img} ${st.blockSecond}`}
						{...regulations.papersImg}
						switchToTabletWidth={768}
						switchToMobileWidth={420}
					/>
					<AdaptiveImg
						className={`${st.img} ${st.blockThird}`}
						{...regulations.signatureImg}
						switchToTabletWidth={768}
						switchToMobileWidth={420}
					/>
					<div className={`${st.wrapper} ${st.blockFour}`}>
						<Clarification
							titleClass={st.title}
							textClass={st.text}
							clarificationClass={st.block}
							theme="light"
							{...regulations.ourPurpose}
						/>
						<Clarification
							titleClass={st.title}
							textClass={st.text}
							clarificationClass={st.block}
							theme="light"
							{...regulations.ourMission}
						/>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection className={st.clarificationGroup} theme="light">
				<div className={st.wrapper}>
					{clarification_content.map((item) => (
						<Clarification
							theme="light"
							key={item.title}
							clarificationClass={st.block}
							title={item.title}
							titleClass={st.title}
							textClass={st.text}
							text={item.text}
						/>
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.comments}
				title="Testimonial from our clients"
				subtitle="With Flex, you can build websites without writing code."
			>
				<div className={st.list}>
					{comments.map((item) => (
						<Comment className={st.block} key={item.text} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection className={st.explanation} theme="light">
				<div className={st.content}>
					<Clarification theme="light" {...explanations.complaints} />
					<div className={st.wrapper}>
						<Clarification
							clarificationClass={st.block}
							subtitleClass={st.subtitle}
							theme="light"
							{...explanations.howToSubmit}
						/>
						<ol className={st.list}>
							<li className={st.item}>
								Submit your complaint in writing to our Compliance Department at
								<a href="mailto:info@globalstockmarket.org">
									<span> info@globalstockmarket.org</span>
								</a>
								.
							</li>
							<li className={st.item}>
								Provide as much information as possible to help us understand
								and address your concerns promptly."
							</li>
						</ol>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.sendMail}
				theme="light"
				title="Leave your email"
				subtitle="And we will answer all of your questions!"
			>
				<EmailForm btnText="Connect" />
			</UniversalSection>
		</main>
	);
};

export default Regulation;
