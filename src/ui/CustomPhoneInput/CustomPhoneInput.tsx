import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { FieldError, UseFormSetValue } from "react-hook-form";
import { Country, contriesSortedByCode } from "../../../countriesData";
import { ArrowIcon } from "../icons";
import st from "./styles.module.scss";

type CustomPhoneInputProps = {
	label?: string;
	error?: FieldError;
	labelClass?: string;
	inputClass?: string;
	errorClass?: string;
	labelTextClass?: string;
	setValue: UseFormSetValue<{
    fullName: string;
    email: string;
    country: string;
    phoneNumber: string;
    password: string;
}>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PhoneCodeOption = ({ country }: { country: Country }) => (
	<div className={st.phoneCodeOption}>
		<img className={st.icon} key={country.name} src={country.icon} />
		<span className={st.code}>{country.dial_code}</span>
	</div>
);

const CustomPhoneInput: FC<CustomPhoneInputProps> = ({
	label = "",
	error,
	labelClass = "",
	inputClass = "",
	errorClass = "",
	labelTextClass = "",
	setValue,
	...props
}) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [currCountry, setCurrCountry] = useState<Country>({
		name: "Ukraine",
		dial_code: "+380",
		icon: "https://country-code-au6g.vercel.app/UA.svg",
	});

	useEffect(() => {
		setValue("phoneNumber", currCountry.dial_code + phoneNumber);
	}, [currCountry, phoneNumber, setValue]);

	const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length <= 9) {
			setPhoneNumber((prev) => (/[^0-9]/.test(value) ? prev : value));
		}
	};

	const handleSelectCountrie = (country: Country) => {
		setCurrCountry(country);
		setIsSelectOpen(false);
	};

	return (
		<label className={`${st.label} ${labelClass}`}>
			<span className={`${st.labelText} ${labelTextClass}`}>{label}</span>
			<div className={st.wrapper}>
				<div className={st.select}>
					<button
						className={st.currOption}
						type="button"
						onClick={() => setIsSelectOpen((prev) => !prev)}
					>
						<PhoneCodeOption country={currCountry} />
						<ArrowIcon direction={isSelectOpen ? "up" : "down"} />
					</button>
					<div className={`${st.dropdown} ${isSelectOpen ? st.open : ""}`}>
						<ul className={st.dropdownList}>
							{contriesSortedByCode.map((country) => (
								<li key={country.name}>
									<button
										type="button"
										onClick={() => handleSelectCountrie(country)}
										tabIndex={isSelectOpen ? 0 : -1}
										className={`${st.optionBtn} ${inputClass}`}
									>
										<PhoneCodeOption country={country} />
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<input
					type="text"
					className={st.input}
					onChange={handleChangePhoneNumber}
					value={phoneNumber}
					placeholder="000000000"
					minLength={9}
					inputMode="decimal"
					{...props}
				/>
			</div>
			{error && <p className={`${st.error} ${errorClass}`}>{error.message}</p>}
		</label>
	);
};
export default CustomPhoneInput;
