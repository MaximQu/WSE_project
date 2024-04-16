import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import st from "./styles.module.scss";

type CustomInputProps = {
	label?: string;
	error?: FieldError;
	labelClass?: string;
	inputClass?: string;
	errorClass?: string;
	labelTextClass?: string;
	name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	(
		{
			label = "",
			error,
			labelClass = "",
			inputClass = "",
			errorClass = "",
			labelTextClass = "",
			...props
		},
		ref,
	) => {
		return (
			<label className={`${st.label} ${labelClass}`}>
				<span className={`${st.labelText} ${labelTextClass}`}>{label}</span>
				<input
					className={`${st.input} ${inputClass}`}
					ref={ref}
					{...props}
				/>
				{error && (
					<p className={`${st.error} ${errorClass}`}>{error.message}</p>
				)}
			</label>
		);
	},
);
export default CustomInput;
