import { FC } from "react";
import st from "./styles.module.scss";

type AdaptiveImgProps = {
	desktop?: string;
	tablet?: string;
	mobile?: string;
	alt?: string;
	className?: string;
	type?: string;
};

const AdaptiveImg: FC<AdaptiveImgProps> = ({
	className = "",
	desktop = "",
	tablet = "",
	mobile = "",
	alt = "",
}) => {
	const tabletImgType = tablet?.split(".")[1];
	const mobileImgType = tablet?.split(".")[1];
	return (
		<picture className={className}>
			<source
				srcSet={mobile}
				media="(max-width: 480px)"
				type={`image/${tabletImgType}`}
			/>
			<source
				srcSet={tablet}
				media="(max-width: 768px)"
				type={`image/${mobileImgType}`}
			/>
			<img className={`${className} ${st.img}`} src={desktop} alt={alt} />
		</picture>
	);
};
export default AdaptiveImg;
