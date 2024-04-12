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
import { faq_content, slider_content, steps_content } from "./content";
import st from "./styles.module.scss";

const PrivateMarkets = () => {
	return (
		<main>
			<UniversalSection theme="light">
				<Clarification
					theme="light"
          skewed
					title={`Welcome to \nPrivate markets at WSE`}
					text="Explore exclusive investment opportunities and discover the potential of private markets with World Stock Exchange. Our platform provides access to a diverse range of private investment options, allowing investors to participate in exciting ventures and unlock new avenues for portfolio growth. Whether you're seeking alternative assets, venture capital opportunities, or private equity investments, our platform offers a gateway to the world of private markets. Join us and delve into a realm of potential and opportunity."
				/>
			</UniversalSection>
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
				title="Unlock exclusive opportunities with WSE"
				subtitle="Why choose World Stock Exchange for private market investing?"
			>
				<Swiper
					className={st.swiper}
					slidesPerView={"auto"}
					modules={[Pagination]}
					spaceBetween={24}
					// autoHeight={true}
					pagination={{ clickable: true }}
					// loop={false}
					// grabCursor={true}
				>
					{slider_content.map((item) => (
						<SwiperSlide className={st.slide} key={item.title}>
							<img src={item.photo} className={st.img} alt={item.title} />
							<Clarification
								className={st.block}
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
				<MultipleButtons />
			</UniversalSection>
		</main>
	);
};

export default PrivateMarkets;
