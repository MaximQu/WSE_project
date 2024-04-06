import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";

const Hero = () => {
	return (
		<div className={st.hero}>
			<div className={`${st.inner} container`}>
				<div className={st.wrapper}>
					<div className={st.videoContainer}>
						<video autoPlay loop muted className={st.video}>
							<source
								src="/src/assets/video/Video-1st-screen.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<h1 className={`${st.title} text-h1`}>WORLD STOCK EXCHANGE</h1>
					<div className={st.textWrapper}>
						<p className={`${st.text} text-h3`}>
							Control and supervision of all stock exchanges in the world
						</p>
						<p className={`${st.text} text-h3`}>
							WSE provides financial markets and security services to public and
							private companies
						</p>
					</div>
					<ButtonOrLink>Start trading</ButtonOrLink>
				</div>
			</div>
		</div>
	);
};

export default Hero;
