import {
  workingProcessDesktopJPG,
  workingProcessMobileJPG,
  workingProcessTabletJPG,
} from "@/assets/img/jpg";
import { AdaptiveImg, ButtonOrLink, Select } from "@/ui";
import { LogoIcon } from "@/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";
import { countriesData } from "../../../countriesData";

const Registration = () => {
	const signUpSchema = z.object({
		fullName: z.string().min(2, "Required field. Min length 2"),
		email: z.string().email().min(8, "Required field.Min length 8").trim(),
		country: z.string().min(1, "Required field"),
		phoneNumber: z.coerce.number().int().min(9, "Required field. Min length 9").positive(),
		password: z.string().min(8, "Required field. Min length 8").trim(),
		phoneCode: z.string(),
	});

	type TFormFields = z.infer<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
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
					<label className={st.label}>
						Full name
						<input
							className={st.input}
							type="text"
							{...register("fullName")}
							placeholder="Full name"
						/>
						{errors.fullName && <p>{errors.fullName?.message}</p>}
					</label>
					<label className={st.label}>
						Email
						<input
							className={st.input}
							type="email"
							{...register("email")}
							placeholder="Email"
						/>
						{errors.email && <p>{errors.email?.message}</p>}
					</label>
					<label className={st.label}>
						Phone number
						<div className="">
							<Select
								register={register}
								styleType="phoneCode"
								data={countriesData}
							/>
						</div>
						{errors.phoneNumber && <p>{errors.phoneNumber?.message}</p>}
					</label>
					<label className={st.label}>
						Country
						<Select register={register} data={countriesData} />
					</label>
					<label className={st.label}>
						Password
						<input
							type="password"
							className={st.input}
							{...register("password")}
							placeholder="Password"
						/>
						{errors.password && <p>{errors.password.message}</p>}
					</label>
					<ButtonOrLink className={st.btn} type="submit">
						{isSubmitting ? "Loading..." : "Sign Up"}
					</ButtonOrLink>
				</form>
			</div>
			<AdaptiveImg
				desktop={workingProcessDesktopJPG}
				tablet={workingProcessTabletJPG}
				mobile={workingProcessMobileJPG}
				alt="Sign up to your account"
        className={st.img}
			/>
		</div>
	);
};
export default Registration;
