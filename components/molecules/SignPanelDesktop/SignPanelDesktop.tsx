import styled from "styled-components";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import Link from "next/link";
import { ButtonDashboard } from "../../atoms/ButtonDashboard/ButtonDashboard";

const SignPanelWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export const SignPanelDesktop = () => {
    return (
        <SignPanelWrapper>
            <li>
                <Link href={ "https://demo.trailofsales.com/" } passHref>
                    <ButtonDashboard>Demo App</ButtonDashboard>
                </Link>
            </li>
            <li>
                <Link href={ "/login" } passHref>
                    <ButtonLogin>Log In</ButtonLogin>
                </Link>
            </li>
            <li>
                <Link href={ "/signup" } passHref>
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                </Link>
            </li>
        </SignPanelWrapper>
    );
};