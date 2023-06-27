import React, { useCallback } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useTranslation } from "react-i18next";
import { useUser } from "./auth_components/userProvider";

// Redirect URL after successful login
const REDIRECT_URI = "http://localhost:3000/login"

export const ChakraSocialAuth = ({ onLogin, onLogout }) => {
    const { t } = useTranslation();
    const { setUser } = useUser(); // 'user' is also extracted here

    // Chakra UI's toast for notifications
    const toast = useToast();

    // Callback function to handle successful login response
    // Updates the global user state and stores user data in local storage
    const onResolve = useCallback(
        ({ provider, data }) => {
            const userData = {
                provider,
                profile: data,
            };
            // Updates the global user state
            setUser(userData);

            // Stores user data in local storage
            localStorage.setItem('user', JSON.stringify(userData));
        },
        [setUser]
    );
    
    // Callback function to notify the start of the login process
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
        // Google login button component
        // Uses 'LoginSocialGoogle' from 'reactjs-social-login'
        // The 'client_id' is obtained from the environment variable 'REACT_APP_GG_APP_ID'
        <Box>
            <LoginSocialGoogle
                isOnlyGetCode={true}
                client_id={process.env.REACT_APP_GG_APP_ID || ""}
                redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={onResolve}
                // Log any errors to the console
                onReject={(err) => {
                    console.error(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </Box>
    );
};
