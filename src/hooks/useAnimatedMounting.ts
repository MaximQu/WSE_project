import React, { useEffect, useState } from "react";

type UseAnimatedMounting = (
	isMounted: boolean,
	delay: number,
	animationName: {
		onMount: string;
		onUnMount: string;
	},
) => [boolean, React.CSSProperties];

const useAnimatedMounting: UseAnimatedMounting = (
	isMounted,
	delay,
	animationName,
) => {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		if (isMounted && !shouldRender) {
			setShouldRender(true);
		} else if (!isMounted && shouldRender) {
			timeoutId = setTimeout(() => setShouldRender(false), delay);
		}
		return () => clearTimeout(timeoutId);
	}, [isMounted, delay, shouldRender]);

	return [
		shouldRender,
		{
			animationDuration: delay + "ms",
			animationName: isMounted
				? animationName.onMount
				: animationName.onUnMount,
			animationFillMode: "forwards",
		} as React.CSSProperties,
	];
};
export default useAnimatedMounting;
