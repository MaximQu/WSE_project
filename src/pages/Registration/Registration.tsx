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
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";

const Registration = () => {
	const signUpSchema = z.object({
		fullName: z.string().min(2, "Required field. Minimum length 2"),
		email: z.string().email().min(8, "Required field. Minimum length 8").trim(),
		country: z.string().min(3, "Required field"),
		phoneNumber: z.string().min(11, "Required field. Minimum length 9").trim(),
		password: z.string().min(8, "Required field. Minimum length 8").trim(),
	});

	type TFormFields = z.infer<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setValue,
	} = useForm<TFormFields>({ resolver: zodResolver(signUpSchema) });

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(data);
	};

	return (
		<div className={`${st.registration} container`}>
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
						setValue={setValue}
						error={errors.phoneNumber}
					/>
					<CountriesSelect
						label="Country"
						setValue={setValue}
						error={errors.country}
					/>
					<CustomInput
						label="Password"
						type="password"
						{...register("password")}
						placeholder="**********************"
						error={errors.password}
					/>
					<ButtonOrLink className={st.btn} type="submit">
						{isSubmitting ? "loading..." : "Sign up"}
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
		</div>
	);
};

export default Registration;
