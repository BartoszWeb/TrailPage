import Link from "next/link";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { Error, FormLabel, InputWrapper, LogoContainer, LogoWrapper } from "./Form.styles";
import { FormContainer, StyledLogo, StyledParagraph, StyledInput, FormButton } from "./Form.styles";
import { Logo } from "../../atoms/Logo/Logo";
import { useContext, useEffect } from "react";
import NotificationContext from "../../../contexts/NotificationContext";
import { useRouter } from "next/router";

const initialValues = {
    email: "",
    password: "",
};

export const LoginForm = () => {
        const notificationContext = useContext(NotificationContext);


        const onSubmit = async () => {
            notificationContext.showNotification({
                title: "Logging in...",
                message: "In processing...",
                status: "pending",
            });

            try {
                notificationContext.showNotification({
                    title: "Successfully logged",
                    message: "Welcome",
                    status: "success",
                });
            } catch (error) {
                notificationContext.showNotification({
                    title: "Error",
                    message: "Something went wrong!",
                    status: "error",
                });
            }

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
                <StyledParagraph>Log in</StyledParagraph>
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
                    <FormLabel className="label" htmlFor="email">Email</FormLabel>
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
                <FormButton type="submit">Log in</FormButton>
            </FormContainer>
        );
    }
;