import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import { TickerWidget } from "@/ui/Widgets/TradingViewWidgets";

const Hero = () => {
	return (
		<section className={st.hero}>
			<div className={`${st.wrapper} container`}>
				<div className={st.contentBlock}>
					<h1 className={st.title}>GLOBAL STOCK MARKET</h1>
					<p className={st.text}>
						Control and supervision of all stock exchanges in the world
					</p>
					<p className={st.text}>
						GSE provides financial markets and security services to public and
						private companies
					</p>
					<ButtonOrLink className={st.btn}>Start trading</ButtonOrLink>
					<video autoPlay loop muted preload="none" className={st.video}>
						<source src="hero-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<TickerWidget />
			</div>
		</section>
	);
};

export default Hero;
