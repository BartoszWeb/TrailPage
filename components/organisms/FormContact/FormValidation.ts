import { Values } from "./FormContact";

export const validationPassword = (str: string) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
};
export const validationEmail = (str: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
};

interface Props {
    email: null | string,
    title: null | string,
    message: null | string,
}

export const Validate = (values: Values) => {
    let errors = {} as Props;

    if (!values.email) {
        errors.email = "Email cannot be empty";
    } else if (!validationEmail(values.email)) {
        errors.email = "Email is incorrect";
    }

    if (!values.title) {
        errors.title = "Title cannot be empty";
    }
    if (!values.message) {
        errors.message = "Message cannot be empty";
    }
    return errors;
};