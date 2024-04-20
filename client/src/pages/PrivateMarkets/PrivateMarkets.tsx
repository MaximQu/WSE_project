import {
	smartphoneDesktopJPG,
	smartphoneMobileJPG,
	smartphoneTabletJPG,
} from "@/assets/img/jpg";
import { Clarification, Dropdown, UniversalSection } from "@/components";
import { AdaptiveImg, MultipleButtons } from "@/ui";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import {
	explanation,
	faq_content,
	slider_content,
	steps_content,
} from "./content";
import st from "./styles.module.scss";

const PrivateMarkets = () => {
	return (
		<main>
			<UniversalSection theme="light">
				<Clarification
					theme="light"
          type="skewed"
					title={`Welcome to \nPrivate markets at GSM`}
					text="Explore exclusive investment opportunities and discover the potential of private markets with Global Stock Market. Our platform provides access to a diverse range of private investment options, allowing investors to participate in exciting ventures and unlock new avenues for portfolio growth. Whether you're seeking alternative assets, venture capital opportunities, or private equity investments, our platform offers a gateway to the world of private markets. Join us and delve into a realm of potential and opportunity."
				/>
			</UniversalSection>
			<UniversalSection
				className={st.explanation}
				title="How Does It Work?"
				subtitle="Entering the private markets with Global Stock Market is straightforward and offers unique investment opportunities. Here's how it works."
			>
				<div className={st.layout}>
					<div className={st.wrapper}>
						{explanation.map((item) => (
							<p key={item.text}>{item.text}</p>
						))}
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
				title="Joining Global Stock Market and accessing private markets is easy"
			>
				<ul className={st.list}>
					{steps_content.map((item) => (
						<li key={item.id} className={st.card} data-count={item.id}>
							<h3 className={st.heading}>{item.title}</h3>
							<p className={st.text}>{item.text}</p>
						</li>
					))}
				</ul>
			</UniversalSection>
			<UniversalSection
				className={st.slider}
				title="Unlock exclusive opportunities with GSM"
				subtitle="Why choose Global Stock Market for private market investing?"
			>
				<Swiper
					className={st.swiper}
					slidesPerView={"auto"}
					modules={[Pagination]}
					spaceBetween={24}
					pagination={{ clickable: true }}
				>
					{slider_content.map((item) => (
						<SwiperSlide className={st.slide} key={item.title}>
							<img src={item.photo} className={st.img} alt={item.title} />
							<Clarification
								clarificationClass={st.block}
                titleClass={st.title}
                textClass={st.text}
								title={item.title}
								text={item.text}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</UniversalSection>
			<UniversalSection
				className={st.faq}
				theme="light"
				title="Frequently Asked Questions"
				subtitle="Answers to your burning questions about the Stock Market"
			>
				<div className={st.list}>
					{faq_content.map((item) => (
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
				<MultipleButtons className={st.block} />
			</UniversalSection>
		</main>
	);
};

export default PrivateMarkets;
