import { ChangeEvent, ElementRef, FC, useEffect, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { ArrowIcon } from "../icons";
import st from "./styles.module.scss";

type SelectProps = {
	register: UseFormRegister<{
		country: string;
		email: string;
		password: string;
		fullName: string;
		phoneNumber: number;
		phoneCode: string;
	}>;
	data: {
		name: string;
		dial_code: string;
		icon: string;
	}[];
	styleType?: "country" | "phoneCode";
};

const Select: FC<SelectProps> = ({ register, styleType, data }) => {
	const selectRef = useRef<ElementRef<'div'>>(null)
  const [numberInputValue, setNumberInputValue] = useState<string>("");

	const [phoneCodeValue, setPhoneCodeValue] = useState({
		name: "Ukraine",
		dial_code: "+380",
		icon: "https://country-code-au6g.vercel.app/UA.svg",
	});
	const [isActivePhoneCode, setIsActivePhoneCode] = useState<boolean>(false);

	const [isActiveCountry, setIsActiveCountry] = useState<boolean>(false);
	const [countryValue, setCountryValue] = useState<string>("");

	const handleCountrySetValue = (value: string) => {
		setCountryValue(value);
	};

	const handleSetPhoneCodeValue = (value: {
		name: string;
		dial_code: string;
		icon: string;
	}) => {
		setPhoneCodeValue({
			name: value.name,
			dial_code: value.dial_code,
			icon: value.icon,
		});
	};

	const handleChangePhoneNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
		setNumberInputValue(e.target.value);
	};

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
          setIsActiveCountry(false);
          setIsActivePhoneCode(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

	if (styleType === "phoneCode") {
		return (
			<div
      ref={selectRef}
				className={`${st.select} ${
					styleType === "phoneCode" ? st.phoneCodeStyle : ""
				}`}
			>
				<div className={st.block}>
					<div className={st.content}>
						<div className={st.inputNumberWrapper}>
							<img
								key={phoneCodeValue.name}
								className={st.flagIcon}
								src={phoneCodeValue.icon}
								alt="Code"
							/>
							<button
								type="button"
								className={st.phoneCodeBtn}
								onClick={() => setIsActivePhoneCode((prev) => !prev)}
							>
								{phoneCodeValue.dial_code}
								<ArrowIcon
									className={st.arrowIcon}
									direction={isActivePhoneCode ? "up" : "down"}
								/>
							</button>
						</div>
						<div
							className={`${st.dropDown} ${isActivePhoneCode ? st.active : ""}`}
						>
							<div className={st.dropDownList}>
								{data.slice().sort((a, b) => eval(a.dial_code) - eval(b.dial_code))
									.map((item) => (
										<button
											type="button"
											className={st.phoneCodeBtn}
											tabIndex={isActivePhoneCode ? 0 : -1}
											onClick={() => {
												handleSetPhoneCodeValue(item);
												setIsActivePhoneCode(false);
											}}
											key={item.name}
										>
											<img
												className={st.flagIcon}
												src={item.icon}
												alt={item.name}
											/>
											{item.dial_code}
										</button>
									))}
							</div>
						</div>
					</div>
					<input
						{...register("phoneNumber")}
						type="number"
						className={st.input}
						name="phoneNumber"
						value={numberInputValue}
						onChange={handleChangePhoneNumberValue}
						placeholder="Phone number"
					/>
					<input
						{...register("phoneCode")}
						type="text"
						className="hide"
						name="phoneCode"
						value={phoneCodeValue.dial_code}
						readOnly
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={st.select} ref={selectRef}>
			<div className={st.inputWrapper}>
				<input
					{...register("country")}
					type="text"
					className="hide"
					name="country"
					value={countryValue}
					readOnly
				/>
				<button
					type="button"
					className={st.countryValueBtn}
					onClick={() => setIsActiveCountry((prev) => !prev)}
				>
					{countryValue ? countryValue : "Country"}
					<ArrowIcon direction={isActiveCountry ? "up" : "down"} />
				</button>
			</div>
			<div className={`${st.dropDown} ${isActiveCountry ? st.active : ""}`}>
				<div className={st.dropDownList}>
					{data.map((item) => (
						<button
							type="button"
							className={st.countryBtn}
							tabIndex={isActiveCountry ? 0 : -1}
							onClick={() => {
								handleCountrySetValue(item.name);
								setIsActiveCountry(false);
							}}
							key={item.name}
						>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Select;
