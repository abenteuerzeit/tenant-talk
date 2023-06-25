import React, { useCallback } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useTranslation } from "react-i18next";
import { useUser } from "./auth_components/userProvider";

const REDIRECT_URI = "http://localhost:3000/login"

export const ChakraSocialAuth = ({ onLogin, onLogout }) => {
    const { t } = useTranslation();
    const { setUser } = useUser(); // 'user' is also extracted here
    const toast = useToast();

    // When a login response is received, update the global user state
    // This will cause all components that use this state to re-render
    // with the new user data
    const onResolve = useCallback(
        ({ provider, data }) => {
            const userData = {
                provider,
                profile: data,
            };
            setUser(userData);
            // save user data to local storage
            localStorage.setItem('user', JSON.stringify(userData));
        },
        [setUser]
    );
    
    const onLoginStart = useCallback(() => {
        toast({
            title: t("Starting Login..."),
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top",
        });
    }, [toast,t]);


    return (
        <Box>
            <LoginSocialGoogle
                isOnlyGetCode={true}
                client_id={process.env.REACT_APP_GG_APP_ID || ""}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={onResolve}
                onReject={(err) => {
                    console.error(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </Box>
    );
};