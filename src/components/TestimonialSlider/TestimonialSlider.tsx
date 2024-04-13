import QuoteIcon from "@/ui/icons/QuoteIcon";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { testimonials } from "./content";
import st from "./styles.module.scss";

const TestimonialSlider = () => {
	return (
		<Swiper
			className={`${st.slider} testimonial-slider`}
			slidesPerView={1}
			modules={[Pagination]}
			pagination={{ clickable: true }}
			loop={true}
			grabCursor={true}
		>
			{testimonials.map((testimonial) => (
				<SwiperSlide className={st.slide} key={testimonial.quote}>
					<blockquote className={st.testimonial}>
						<QuoteIcon className={st.quoteIcon} />
						<q className={st.quote}>{testimonial.quote}</q>
						<QuoteIcon
							className={`${st.quoteIcon} ${st.closeQuote}`}
							type="close"
						/>
					</blockquote>
					<div className={st.author}>
						<img
							className={st.img}
							src={testimonial.userImg}
							alt={testimonial.userName}
							width={80}
							height={80}
						/>
						<div className={st.authorInfo}>
							<h3 className={st.fullName}>{testimonial.userName}</h3>
							<p className={st.position}>{testimonial.userPosition}</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default TestimonialSlider;
