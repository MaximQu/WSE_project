import {
	smartphoneDesktopJPG,
	smartphoneMobileJPG,
	smartphoneTabletJPG,
} from "@/assets/img/jpg";
import { Clarification, Dropdown } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { content } from "./content";
import st from "./styles.module.scss";
import { Fragment } from "react/jsx-runtime";

const PrivateMarkets = () => {
	return (
		<main>
			<UniversalSection
				className={st.explanationBlock}
				title="How Does It Work?"
				subtitle="Entering the private markets with World Stock Exchange is straightforward and offers unique investment opportunities. Here's how it works."
			>
				<div className={st.layout}>
					<div className={st.wrapper}>
						<p>
							In private markets, investors can access unique opportunities not
							available in public markets, such as early-stage ventures, real
							estate projects, and private equity investments. While private
							market investments may offer higher returns, they can also be less
							liquid and involve greater risk. However, with careful
							consideration and due diligence, investors can diversify their
							portfolios and unlock potential growth opportunities.
						</p>
						<p>
							At WSE, we provide a seamless platform for investors to explore,
							select, and invest in private market opportunities. From creating
							an account to completing transactions and monitoring portfolio
							performance, our user-friendly platform guides investors every
							step of the way. Join us at WSE and embark on a journey to
							discover and capitalize on the potential of private markets
						</p>
					</div>
					<AdaptiveImg
						desktop={smartphoneDesktopJPG}
						tablet={smartphoneTabletJPG}
						mobile={smartphoneMobileJPG}
						alt="How Does It Work?"
						className={st.img}
					/>
				</div>
			</UniversalSection>
			<UniversalSection
				theme="light"
				className={st.steps}
				title="Joining World Stock Exchange and accessing private markets is easy"
			>
				<ul className={st.stepsList}>
					{content.steps.map((item) => (
						<li className={st.card} data-count={item.id}>
							<h3 className={st.heading}>{item.title}</h3>
							<p className={st.text}>{item.text}</p>
						</li>
					))}
				</ul>
			</UniversalSection>
			<UniversalSection
				title="Unlock exclusive opportunities with WSE"
				subtitle="Why choose World Stock Exchange for private market investing?"
			>
				{/* <Swiper
					className={st.swiper}
					slidesPerView={3}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					loop={false}
					grabCursor={true}
				>
					<SwiperSlide className={st.slide}>
						{content.slider.map((item) => (
							<Fragment key={item.title}>
								<img
									src={item.photo}
									className={st.slideImg}
									alt={item.title}
								/>
								<Clarification
									className={st.clarification}
									theme="dark"
									title={item.title}
									text1={item.text_1}
									text2={item.text_2}
								/>
							</Fragment>
						))}
					</SwiperSlide>
				</Swiper> */}
			</UniversalSection>
			<UniversalSection
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Answers to your burning questions about the Stock Market"
			>
				<div className={st.faqList}>
					{content.faqData.map((item) => (
						<Dropdown key={item.answer} data={item} />
					))}
				</div>
			</UniversalSection>

			<UniversalSection
				theme="light"
				className={st.account}
				title="Create your account today!"
				subtitle="Easy way to Great benefits!"
			>
				<MultipleButtons />
			</UniversalSection>
		</main>
	);
};

export default PrivateMarkets;
