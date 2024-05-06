import {
	workingProcessDesktopJPG,
	workingProcessMobileJPG,
	workingProcessTabletJPG,
} from "@/assets/img/jpg";
import { AdaptiveImg, ButtonOrLink, CustomInput } from "@/ui";
import { LogoIcon } from "@/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";

const LogIn = () => {
	const signUpSchema = z.object({
		email: z.string().email().min(8, "Required field. Minimum length 8").trim(),
		password: z.string().min(8, "Required field. Minimum length 8").trim(),
	});

	type TFormFields = z.infer<typeof signUpSchema>;

	const {
		register,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<TFormFields>({ resolver: zodResolver(signUpSchema) });

	useEffect(() => {
		reset({
			email: "",
			password: "",
		});
	}, [isSubmitSuccessful, reset]);

	const onSubmit: SubmitHandler<TFormFields> = () => {
		setError("password", {
			message: "Your account has been blocked. Please contact your adviser",
		});
	};

	return (
		<main className={`${st.registration} container`}>
			<div className={st.wrapper}>
				<LogoIcon className={st.logo} theme="dark" type="small" />
				<p className={st.subText}>Log in to your account</p>
				<form className={st.form} onSubmit={handleSubmit(onSubmit)}>
					<CustomInput
						label="Email"
						type="email"
						{...register("email")}
						placeholder="Email@gmail.com"
						error={errors.email}
					/>
					<CustomInput
						label="Password"
						type="password"
						{...register("password")}
						placeholder="**********************"
						error={errors.password}
					/>
					<ButtonOrLink className={st.btn} type="submit">
						{isSubmitting ? "Loading..." : "Log in"}
					</ButtonOrLink>
				</form>
			</div>
			<AdaptiveImg
				desktop={workingProcessDesktopJPG}
				tablet={workingProcessTabletJPG}
				mobile={workingProcessMobileJPG}
				alt="Sign up to your account"
				switchToTabletWidth={768}
				switchToMobileWidth={480}
				className={st.img}
			/>
		</main>
	);
};

export default LogIn;
