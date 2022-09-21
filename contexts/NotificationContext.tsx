import React, { createContext, useState, useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

interface NotificationData {
    title: string,
    message: string,
    status: string
}

interface NotificationContext {
    notification: NotificationData | null,
    showNotification: (notificationData: NotificationData) => void;
    hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContext>({
    notification: null,
    showNotification: function (notificationData: NotificationData) {
    },
    hideNotification: function () {
    },
});

export function NotificationContextProvider(props: Props) {
    const [activeNotification, setActiveNotification] = useState<NotificationData | null>(null);

    function showNotificationHandler(notificationData: NotificationData | null) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    useEffect(() => {
        if (
            activeNotification &&
            (activeNotification.status === "success" ||
                activeNotification.status === "error")
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 7000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]);

    return (
        <NotificationContext.Provider value={ context }>
            { props.children }
        </NotificationContext.Provider>
    );
}

export default NotificationContext;