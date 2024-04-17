import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import st from "./styles.module.scss";

type CustomTextAreaProps = {
	label?: string;
	error?: FieldError;
	labelClass?: string;
	inputClass?: string;
	errorClass?: string;
	labelTextClass?: string;
	name: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const CustomTextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
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
				<textarea
					className={`${st.input} ${inputClass}`}
          placeholder="Write your comment here"
          rows={6}
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
export default CustomTextArea;
