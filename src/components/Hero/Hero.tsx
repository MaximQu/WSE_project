import { ButtonOrLink } from "@/ui";
import st from "./styles.module.scss";
import Stat from "../Stat/Stat";

const Hero = () => {
	return (
		<section className={st.hero}>
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
					<ButtonOrLink className={st.btn}>Start trading</ButtonOrLink>
				</div>
        <Stat data={[{value:'$10 Billion', text: 'Invested'}]} theme="light"/>
			</div>
		</section>
	);
};

export default Hero;
