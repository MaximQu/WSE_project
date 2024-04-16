import { contactsSVG } from "@/assets/img/svg";
import { ContactInfo, UniversalSection } from "@/components";
import {
	ButtonOrLink,
	CustomInput,
	CustomPhoneInput,
	CustomTextArea,
} from "@/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import st from "./styles.module.scss";

const Contacts = () => {
	const signUpSchema = z.object({
		fullName: z.string().min(2, "Required field. Minimum length 2"),
		email: z.string().email().min(8, "Required field. Minimum length 8").trim(),
		phoneNumber: z.string().min(9, "Required field. Minimum length 9").trim(),
		summary: z.string(),
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

	const setPhoneNumberValue = (value: string) => setValue("phoneNumber", value);

	return (
		<main>
			<UniversalSection theme="light" className={st.contact} title="Contacts">
				<div className={st.content}>
					<form className={st.form} onSubmit={handleSubmit(onSubmit)}>
						<ButtonOrLink as="a" to={"/"} className={st.learnMore}>
							Learn more
						</ButtonOrLink>
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
						/>
						<CustomTextArea label="Summary" {...register("summary")} />
						<ButtonOrLink className={st.btn} type="submit">
							{isSubmitting ? "Loading..." : "Sign up"}
						</ButtonOrLink>
					</form>
					<ContactInfo className={st.list} />
				</div>
				<img className={st.img} src={contactsSVG} alt="Contact" />
			</UniversalSection>
		</main>
	);
};

export default Contacts;
