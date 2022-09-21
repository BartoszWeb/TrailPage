import Link from "next/link";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { Error, FormLabel, InputWrapper, LogoContainer, LogoWrapper } from "./Form.styles";
import { FormContainer, StyledLogo, StyledParagraph, StyledInput, FormButton } from "./Form.styles";
import { Logo } from "../../atoms/Logo/Logo";
import { useContext } from "react";
import NotificationContext from "../../../contexts/NotificationContext";

const initialValues = {
    email: "",
    password: "",
};


function SignForm() {
    const notificationContext = useContext(NotificationContext);

    const onSubmit = (values: { email: string, password: string }, { resetForm }: { resetForm: () => void }) => {
        notificationContext.showNotification({
            title: "Signing up...",
            message: "Registering...",
            status: "pending",
        });

        // axios.post("/api/signup", { email: values.email, password: values.password })
        //     .then(function () {
        //         notificationContext.showNotification({
        //             title: "Success",
        //             message: "Successfully registered",
        //             status: "success",
        //         });
        //         resetForm();
        //     })
        //     .catch(function (error) {
        //         notificationContext.showNotification({
        //             title: "Error",
        //             message: error.response.data.message || "Something went wrong!",
        //             status: "error",
        //         });
        //     });

    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate: Validate,
    });

    return (
        <FormContainer onSubmit={ formik.handleSubmit }>
            <LogoContainer>
                <LogoWrapper>
                    <Link passHref href="/">
                        <StyledLogo>
                            <Logo/>
                        </StyledLogo>
                    </Link>
                </LogoWrapper>
            </LogoContainer>
            <StyledParagraph>Sign Up</StyledParagraph>
            <InputWrapper>
                <StyledInput
                    id="email"
                    name={ "email" }
                    type={ "text" }
                    onChange={ formik.handleChange }
                    value={ formik.values.email }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel className="label" htmlFor="email">Business email</FormLabel>
                <Error>{ formik.touched.email && formik.errors.email }</Error>
            </InputWrapper>

            <InputWrapper>
                <StyledInput
                    name={ "password" }
                    type={ "password" }
                    onChange={ formik.handleChange }
                    value={ formik.values.password }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel htmlFor="email">Password</FormLabel>
                <Error>{ formik.touched.password && formik.errors.password }</Error>
            </InputWrapper>

            <FormButton type="submit">Sign up</FormButton>
        </FormContainer>
    );
}

export default SignForm;