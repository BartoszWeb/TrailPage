import Head from "next/head";
import { FormContact } from "../../components/organisms/FormContact/FormContact";
import React from "react";
import { NavigationBlog } from "../../components/organisms/NavigationBlog/NavigationBlog";


function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Send your messages"/>
            </Head>
            <NavigationBlog/>
            <FormContact/>
        </>
    );
}

export default Contact;