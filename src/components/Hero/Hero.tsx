import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";

const Hero = () => {
	return (
		<section className={st.hero}>
			<div className={`${st.wrapper} container`}>
				<h1 className={st.title}>WORLD STOCK EXCHANGE</h1>
				<div className={st.textWrapper}>
					<p className={st.text}>
						Control and supervision of all stock exchanges in the world
					</p>
					<p className={st.text}>
						WSE provides financial markets and security services to public and
						private companies
					</p>
				</div>
				<ButtonOrLink className={st.btn}>Start trading</ButtonOrLink>
				<div className={st.videoContainer}>
					<video autoPlay loop muted className={st.video}>
						<source
							src="/src/assets/video/Video-1st-screen.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
};

export default Hero;
