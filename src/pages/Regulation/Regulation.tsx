import { Clarification, Comment } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import {
  papersDesktopJPG,
  papersMobileJPG,
  papersTabletJPG,
  signatureDesktopJPG,
  signatureMobileJPG,
  signatureTabletJPG,
} from "@/assets/img/jpg";
import { ButtonOrLink } from "@/ui";
import { content } from "./content";
import st from "./styles.module.scss";

const Regulation = () => {
	return (
		<main>
			<UniversalSection theme="light" title="Regulations">
				<div className={st.contentWrapper}>
					<div className={st.content}>
						<div className={st.wrapper}>
							<Clarification
								title="Regulatory Framework"
								text1="World Stock Exchange is authorized by the Guernsey Financial Services Commission to operate as an investment exchange in compliance with the Protection of Investors (Bailiwick of Guernsey)Law, 2020."
							/>
							<Clarification
								title="Regulatory Framework"
								text1="At World Stock Exchange, we oversee the listing of securities and supervise our exchange members. We establish, enforce, and monitor compliance with our Listing Rules and Membership Rules, including Trading and Settlement Rules."
								text2="These regulations govern the behavior of issuers and members, ensuring integrity and transparency in our marketplace."
							/>
						</div>
						<picture>
							<source
								srcSet={papersMobileJPG}
								media="(max-width: 480px)"
								type="image/jpg"
							/>
							<source
								srcSet={papersTabletJPG}
								media="(max-width: 768px)"
								type="image/jpg"
							/>
							<img
								className={st.img}
								src={papersDesktopJPG}
								alt="Sign up to your account"
							/>
						</picture>
					</div>
					<div className={st.content}>
						<div className={st.reversedWrapper}>
							<picture>
								<source
									srcSet={signatureMobileJPG}
									media="(max-width: 480px)"
									type="image/jpg"
								/>
								<source
									srcSet={signatureTabletJPG}
									media="(max-width: 768px)"
									type="image/jpg"
								/>
								<img
									className={st.img}
									src={signatureDesktopJPG}
									alt="Sign up to your account"
								/>
							</picture>
							<Clarification
								title="Our Mission"
								text1="Our mission at World Stock Exchange is to provide a robust and efficient platform for companies to list their securities, investors to trade with confidence, and stakeholders to engage with transparency."
								text2="We strive to cultivate a dynamic marketplace that fosters liquidity, fair pricing, and responsible investment practices, contributing to the long-term prosperity of businesses and communities worldwide."
							/>
						</div>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection theme="light">
				<div className={st.clarificationGroup}>
					{content.clarificationContent.map((item) => (
						<Clarification
							className={st.clarificationEl}
							title={item.title}
							text1={item.text}
						/>
					))}
				</div>
			</UniversalSection>
			<UniversalSection
				title="Testimonial from our clients"
				subtitle="With Flex, you can build websites without writing code."
			>
				<div className={st.commentsGroup}>
					{content.comments.map((item) => (
						<Comment data={item} />
					))}
				</div>
			</UniversalSection>
			<UniversalSection className={st.explanation} theme="light">
				<div className={st.explanationWrapper}>
					<Clarification
						title="Complaints"
						text1="At World Stock Exchange (WSE), we take all complaints seriously and conduct thorough investigations in accordance with our regulations."
						text2="If you have a complaint, please clearly indicate this in your correspondence and provide detailed information to assist our investigation process."
					/>
					<div className="">
						<Clarification
							title="How to Submit a Complaint"
							subTitle="To file a complaint regarding WSE, please follow these steps:"
						/>
						<ol className={st.orderedList}>
							<li className={st.listItem}>
								Submit your complaint in writing to our Compliance Department at
								<span> necesito-su-correoelectronico</span>
								@worldstockexchange.com.
							</li>
							<li className={st.listItem}>
								Provide as much information as possible to help us understand
								and address your concerns promptly."
							</li>
						</ol>
					</div>
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.sendMailSection}
				theme="light"
				title="Leave your email"
				subtitle="And we will answer all of your questions!"
			>
				<form className={st.form}>
					<div className={st.formWrapper}>
						<input
							className={st.input}
							placeholder="Enter your email"
							name="emailConnection"
							type="text"
						/>
						<ButtonOrLink className={st.sendMailBtn} type="submit">
							Connect
						</ButtonOrLink>
					</div>
					<p className={st.subInputText}>
						We care about your data in our <span>privacy policy</span>
					</p>
				</form>
			</UniversalSection>
		</main>
	);
};

export default Regulation;
