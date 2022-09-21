import {
    Error, FormButton,
    FormContainer, FormLabel, InputWrapper, StyledTextArea, StyledInput, StyledParagraph,
} from "./Form.styles";
import { useContext } from "react";
import { useFormik } from "formik";
import { Validate } from "./FormValidation";
import { ContactAnimation } from "../../atoms/ContactAnimation/ContactAnimation";
import axios from "axios";
import NotificationContext from "../../../contexts/NotificationContext";

export interface Values {
    email: string,
    title: string,
    message: string
}

const initialValues = {
    email: "",
    title: "",
    message: "",
};


export const FormContact = () => {
    const notificationContext = useContext(NotificationContext);

    const onSubmit = async (values: Values, { resetForm }: { resetForm: () => void }) => {
        notificationContext.showNotification({
            title: "Message",
            message: "sending...",
            status: "pending",
        });

        let config = {
            method: "post",
            url: `http://localhost:4000/api/contact`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };


        try {
            const response = await axios(config);
            if (response.status === 200) {
                notificationContext.showNotification({
                    title: "Success",
                    message: "Your message has been sent successfully",
                    status: "success",
                });
                resetForm();

            }
        } catch (error: any) {
            notificationContext.showNotification({
                title: "Error",
                message: error.response.data.message || "Something went wrong. Try again.",
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
            <ContactAnimation/>
            <StyledParagraph>Contact</StyledParagraph>
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
                    id="title"
                    name={ "title" }
                    type={ "text" }
                    onChange={ formik.handleChange }
                    value={ formik.values.title }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel className="label" htmlFor="title">Title</FormLabel>
                <Error>{ formik.touched.title && formik.errors.title }</Error>
            </InputWrapper>
            <InputWrapper>
                <StyledTextArea
                    id="message"
                    name={ "message" }
                    onChange={ formik.handleChange }
                    value={ formik.values.message }
                    onBlur={ formik.handleBlur }
                    required
                />
                <FormLabel className="label" htmlFor="message">Your message</FormLabel>
                <Error>{ formik.touched.message && formik.errors.message }</Error>
            </InputWrapper>
            <FormButton type="submit">Send email</FormButton>
        </FormContainer>
    );
};