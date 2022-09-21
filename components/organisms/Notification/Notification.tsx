import React, { useContext } from "react";
import NotificationContext from "../../../contexts/NotificationContext";
import { NotificationContainer } from "./Notification.style";
import ParagraphHtml from "../../atoms/ParagraphHtml/ParagraphHtml";

interface Props {
    title: string,
    message: string,
    status: string
}

function Notification(props: Props) {
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    let statusClasses = "";

    if (status === "success") {
        statusClasses = "success";
    }

    if (status === "error") {
        statusClasses = "error";
    }

    if (status === "pending") {
        statusClasses = "pending";
    }

    const activeClasses = `${ statusClasses }`;

    return (
        <NotificationContainer className={ activeClasses } onClick={ notificationCtx.hideNotification }>
            <h2>{ title }</h2>
            <ParagraphHtml>{ message }</ParagraphHtml>
        </NotificationContainer>
    );
}

export default Notification;