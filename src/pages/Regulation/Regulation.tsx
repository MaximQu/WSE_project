import { Clarification, Comment, EmailForm, UniversalSection } from "@/components";
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
					<div className={st.wrapper}>
						<Clarification
							className={st.block}
							theme="light"
							{...regulations.framework1}
						/>
						<Clarification
							className={st.block}
							theme="light"
							{...regulations.framework2}
						/>
					</div>
					<AdaptiveImg className={st.img} {...regulations.papersImg} />
					<AdaptiveImg className={st.img} {...regulations.signatureImg} />
					<div className={st.wrapper}>
						<Clarification
							className={st.block}
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
							className={st.block}
							title={item.title}
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
						<Comment key={item.text} data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection className={st.explanation} theme="light">
				<div className={st.wrapper}>
					<Clarification theme="light" {...explanations.complaints} />
					<div className={st.block}>
						<Clarification theme="light" {...explanations.howToSubmit} />
						<ol className={st.list}>
							<li className={st.item}>
								Submit your complaint in writing to our Compliance Department at
								<span> necesito-su-correoelectronico</span>
								@worldstockexchange.com.
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
