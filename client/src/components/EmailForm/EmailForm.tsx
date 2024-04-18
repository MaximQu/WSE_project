import { ButtonOrLink } from "@/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";

type EmailFormProps = {
	className?: string;
	btnText?: string;
};

const EmailForm: FC<EmailFormProps> = ({ btnText = "Join us", className }) => {
	const signUpSchema = z.object({
		email: z.string().email().min(8, "Required field. Minimum length 8").trim(),
	});

	type TFormFields = z.infer<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, isSubmitSuccessful },
	} = useForm<TFormFields>({ resolver: zodResolver(signUpSchema) });

	useEffect(() => {
		reset({
			email: "",
		});
	}, [isSubmitSuccessful, reset]);

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		axios
			.get("https://wse-project-server.vercel.app/subscriptionForm", {
				params: {
					email: data.email,
				},
			})
			.then(() => {
				console.log("Success");
				alert("Your form has been successfully sent!");
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<form
			className={`${st.form} ${className}`}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={st.content}>
				<div className={st.wrapper}>
					<input
						className={st.input}
						placeholder="Enter your email"
						type="email"
						required
						{...register("email")}
					/>
					<p className={st.subText}>
						We care about your data in our <span>privacy policy</span>
					</p>
				</div>
				<ButtonOrLink className={st.btn} type="submit">
					{isSubmitting ? "Sending..." : btnText}
				</ButtonOrLink>
			</div>
		</form>
	);
};

export default EmailForm;
