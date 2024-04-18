import {
	workingProcessDesktopJPG,
	workingProcessMobileJPG,
	workingProcessTabletJPG,
} from "@/assets/img/jpg";
import {
	AdaptiveImg,
	ButtonOrLink,
	CountriesSelect,
	CustomInput,
	CustomPhoneInput,
} from "@/ui";
import { LogoIcon } from "@/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";

const Registration = () => {
	const signUpSchema = z.object({
		fullName: z.string().min(2, "Required field. Minimum length 2"),
		email: z.string().email().min(8, "Required field. Minimum length 8").trim(),
		country: z.string().min(3, "Required field"),
		phoneNumber: z.string().min(9, "Required field. Minimum length 9").trim(),
		password: z.string().min(8, "Required field. Minimum length 8").trim(),
	});

	type TFormFields = z.infer<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
		setValue,
	} = useForm<TFormFields>({ resolver: zodResolver(signUpSchema) });

	useEffect(() => {
		reset({
			country: "",
			email: "",
			fullName: "",
			password: "",
			phoneNumber: "",
		});
	}, [isSubmitSuccessful, reset]);

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		axios
			.get("https://wse-project-server.vercel.app/registerForm", {
				params: {
					fullName: data.fullName,
					email: data.email,
					country: data.country,
					phoneNumber: data.phoneNumber,
					password: data.password,
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

	const setPhoneNumberValue = (value: string) => setValue("phoneNumber", value);
	const setCountryValue = (value: string) => setValue("country", value);

	return (
		<main className={`${st.registration} container`}>
			<div className={st.wrapper}>
				<LogoIcon className={st.logo} theme="dark" type="small" />
				<p className={st.subText}>Sign up to your account</p>
				<form className={st.form} onSubmit={handleSubmit(onSubmit)}>
					<CustomInput
						label="Full name"
						type="text"
						{...register("fullName")}
						placeholder="John Smith"
						error={errors.fullName}
					/>
					<CustomInput
						label="Email"
						type="email"
						{...register("email")}
						placeholder="Email@gmail.com"
						error={errors.email}
					/>
					<CustomPhoneInput
						label="Phone Number"
						type="text"
						setValue={setPhoneNumberValue}
						error={errors.phoneNumber}
						isSubmitSuccessful={isSubmitSuccessful}
					/>
					<CountriesSelect
						label="Country"
						setValue={setCountryValue}
						error={errors.country}
						isSubmitSuccessful={isSubmitSuccessful}
					/>
					<CustomInput
						label="Password"
						type="password"
						{...register("password")}
						placeholder="**********************"
						error={errors.password}
					/>
					<ButtonOrLink className={st.btn} type="submit">
						{isSubmitting ? "Loading..." : "Sign up"}
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

export default Registration;
