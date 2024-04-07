import { successDesktopJPG } from "@/assets/img/jpg";
import QuoteIcon from "@/ui/icons/QuoteIcon";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import st from "./styles.module.scss";

const SwiperSlider = () => {
	return (
		<section className={st.slider}>
			<div className="container">
				<Swiper
					className={st.swiper}
					slidesPerView={1}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					loop={true}
					grabCursor={true}
				>
					<SwiperSlide className={st.slide}>
						<div className={st.slideContent}>
							<QuoteIcon />
							<q className={st.quote}>
								Impressed by WSE's user-friendly platform and personalized
								guidance. <br /> They've made investing in global markets
								accessible and straightforward.
							</q>
							<QuoteIcon className={st.closeQuote} type="close" />
						</div>
						<div className={st.author}>
							<img
								className={st.photo}
								src={successDesktopJPG}
								alt="Samuel Clark"
							/>
							<span className={st.fullName}>Samuel Clark</span>
							<span className={st.position}>Investment Advisor</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className={st.slide}>
						<div className={st.slideContent}>
							<QuoteIcon />
							<q className={st.quote}>
								WSE's commitment to transparency and innovation sets them apart.
								<br />
								Their dedication to ethical practices and cutting-edge
								technology reassures me as an investor.
							</q>
							<QuoteIcon className={st.closeQuote} type="close" />
						</div>
						<div className={st.author}>
							<img
								className={st.photo}
								src={successDesktopJPG}
								alt="Sarah Thompson"
							/>
							<span className={st.fullName}>Sarah Thompson</span>
							<span className={st.position}>Financial Analyst</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className={st.slide}>
						<div className={st.slideContent}>
							<QuoteIcon />
							<q className={st.quote}>
								As a wealth manager, I appreciate WSE's clients-first approach,
								demonstrating dedication to delivering value and ensuring
								customer satisfaction, which makes them a trusted partner in the
								financial market.
							</q>
							<QuoteIcon className={st.closeQuote} type="close" />
						</div>
						<div className={st.author}>
							<img
								className={st.photo}
								src={successDesktopJPG}
								alt="Michael Mcfarlane"
							/>
							<span className={st.fullName}>Michael Mcfarlane</span>
							<span className={st.position}>Wealth Manager</span>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};
export default SwiperSlider;
