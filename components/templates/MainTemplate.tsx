import React, { useContext } from "react";
import { Template } from "./MainTemplate.style";
import Notification from "../organisms/Notification/Notification";
import NotificationContext from "../../contexts/NotificationContext";

interface Props {
    children: React.ReactNode;
}

export const MainTemplate = (props: Props) => {
    const notificationContext = useContext(NotificationContext);
    const activeNotification = notificationContext.notification;

    return (
        <>
            <Template>{ props.children }</Template>
            {
                activeNotification && (
                    <Notification title={ activeNotification.title } message={ activeNotification.message }
                                  status={ activeNotification.status }/>)
            }
        </>
    );
};