import { FC } from "react";
import st from "./styles.module.scss";

export type AdaptiveImgProps = {
	desktop?: string;
	tablet?: string;
	mobile?: string;
	alt?: string;
	className?: string;
	type?: string;
	switchToTabletWidth?: number;
	switchToMobileWidth?: number;
};

const AdaptiveImg: FC<AdaptiveImgProps> = ({
	className = "",
	desktop = "",
	tablet = "",
	mobile = "",
	alt = "",
	switchToTabletWidth = 768,
	switchToMobileWidth = 480,
}) => {
	const tabletImgType = tablet?.split(".")[1];
	const mobileImgType = tablet?.split(".")[1];
	return (
		<picture className={className}>
			<source
				srcSet={mobile}
				media={`(max-width: ${switchToMobileWidth}px)`}
				type={`image/${tabletImgType}`}
			/>
			<source
				srcSet={tablet}
				media={`(max-width: ${switchToTabletWidth}px)`}
				type={`image/${mobileImgType}`}
			/>
			<img className={`${className} ${st.img}`} src={desktop} alt={alt} />
		</picture>
	);
};
export default AdaptiveImg;
