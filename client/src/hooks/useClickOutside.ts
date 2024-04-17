import { ElementRef, RefObject, useEffect, useRef } from "react";

const useClickOutside = (el: keyof JSX.IntrinsicElements, cb: () => void) => {
	const clickOutsideRef = useRef<ElementRef<typeof el>>(null);
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				clickOutsideRef.current &&
				!clickOutsideRef.current.contains(e.target as Node)
			) {
				cb();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return clickOutsideRef as RefObject<HTMLDivElement>;
};
export default useClickOutside;
