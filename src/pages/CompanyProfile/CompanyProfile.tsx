import { WSEDesktopJPG, WSEMobileJPG, WSETabletJPG } from "@/assets/img/jpg";
import { puzzleSVG } from "@/assets/img/svg";
import { Clarification } from "@/components";
import UniversalSection from "@/components/UniversalSection/UniversalSection";
import { AdaptiveImg } from "@/ui";
import st from "./styles.module.scss";

const CompanyProfile = () => {
	return (
		<main>
			<UniversalSection
				className={st.mission}
				theme="light"
				title="Mission of WSE"
			>
				<div className={st.content}>
					<Clarification
						subTitle="At World Stock Exchange (WSE), our mission is to democratize access to global financial markets and empower investors of all backgrounds to achieve their financial goals. "
						text1="We are dedicated to providing innovative and transparent financial solutions that enhance the investment experience, foster financial literacy, and drive sustainable growth. "
						text2="With integrity, transparency, and client-centricity at the core of our operations, we strive to be a trusted partner for investors, offering unparalleled access to diverse investment opportunities and delivering value through cutting-edge technology, expert guidance, and unwavering commitment to excellence. Our vision is to create a more inclusive and prosperous financial ecosystem, where everyone has the opportunity to thrive and succeed in their investment journey."
					/>
					<img src={puzzleSVG} alt="Mission of WSE" />
				</div>
			</UniversalSection>
			<UniversalSection
				className={st.history}
				theme="light"
				title="Mission of WSE"
			>
				<div className={st.content}>
					<Clarification
						subTitle="Since our founding in 1965, our stock exchange has played a crucial role in global economic balance, as well as in the protection and control of financial markets on a global scale. Since then, we have been witnesses and key actors in the evolution of financial markets, committed to promoting stability and transparency in the financial world."
						text1="World Stock Bank was founded in 1965. Its creation was the result of a project conceived by the union of all the Stock Markets worldwide, accompanied by a group of five stockbrokers who subscribed the capital to start the business. The world stock exchange union, the founding countries were Luxembourg, Ireland, Singapore, Switzerland and its founder, Denmark. The central idea of this project was to have a bank that would promote and strengthen the action of stockbrokers around the world, and thereby control, thereby contributing to the development of the capital market worldwide. The importance of this objective meant that it was expressly reflected in its corporate statute, this being a distinctive feature of Banco de Valores among the entities that make up the Global Financial System, thus giving a balance to all the economies of the countries of the world."
					/>
					<AdaptiveImg
						desktop={WSEDesktopJPG}
						tablet={WSETabletJPG}
						mobile={WSEMobileJPG}
						alt="Mission of WSE"
					/>
				</div>
			</UniversalSection>
		</main>
	);
};

export default CompanyProfile;
