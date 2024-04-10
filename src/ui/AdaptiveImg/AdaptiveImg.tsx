import { FC } from "react";

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
		<picture>
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
			<img className={className} src={desktop} alt={alt} />
		</picture>
	);
};
export default AdaptiveImg;
