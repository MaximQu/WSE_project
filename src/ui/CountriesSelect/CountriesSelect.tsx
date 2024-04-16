import useClickOutside from "@/hooks/useClickOutside";
import { FC, useEffect, useState } from "react";
import { FieldError, UseFormSetValue } from "react-hook-form";
import { countriesData } from "../../../countriesData";
import { ArrowIcon } from "../icons";
import st from "./styles.module.scss";

type CountriesSelectProps = {
	label?: string;
	error?: FieldError;
	labelClass?: string;
	errorClass?: string;
	labelTextClass?: string;
	setValue: UseFormSetValue<{
		fullName: string;
		email: string;
		country: string;
		phoneNumber: string;
		password: string;
	}>;
};

const CountriesSelect: FC<CountriesSelectProps> = ({
	label = "",
	error,
	labelClass = "",
	errorClass = "",
	labelTextClass = "",
	setValue,
}) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [currCountry, setCurrCountry] = useState("");
	const selectRef = useClickOutside("div", () => setIsSelectOpen(false));

	useEffect(() => {
		setValue("country", currCountry);
	}, [currCountry, setValue]);

	const handleSelectCountry = (country: string) => {
		setCurrCountry(country);
    setIsSelectOpen(false)
	};

	return (
		<label className={`${st.label} ${labelClass}`}>
			<span className={`${st.labelText} ${labelTextClass}`}>{label}</span>
			<div className={st.select}>
				<button
					className={st.currOption}
					type="button"
					onClick={() => setIsSelectOpen((prev) => !prev)}
				>
					{currCountry ? currCountry : "Select"}
					<ArrowIcon direction={isSelectOpen ? "up" : "down"} />
				</button>
				<div className={`${st.dropdown} ${isSelectOpen ? st.open : ""}`}>
					<ul className={st.dropdownList}>
						{countriesData.map((country) => (
							<li key={country.name}>
								<button
									type="button"
									onClick={() => handleSelectCountry(country.name)}
									tabIndex={isSelectOpen ? 0 : -1}
									className={`${st.optionBtn}`}
								>
									{country.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			{error && <p className={`${st.error} ${errorClass}`}>{error.message}</p>}
		</label>
	);
};
export default CountriesSelect;
