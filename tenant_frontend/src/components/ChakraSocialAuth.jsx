import React, { useCallback, useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { User } from "./auth_components/User";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useTranslation } from "react-i18next";

const REDIRECT_URI = window.location.href;

export const ChakraSocialAuth = ({ onLogin, onLogout }) => {
    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState(null);
    const {t} = useTranslation();

    const toast = useToast();

    const onResolve = useCallback(
        ({ provider, data }) => {
          setProvider(provider);
          setProfile(data);
          onLogin(data.name);
        },
        [onLogin]
      );

    const onLoginStart = useCallback(() => {
        toast({
            title: "Starting Login...",
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top",
        });
    }, [toast]);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider("");
        toast({
          title: t("Logout Successful"),
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        onLogout();
      }, [toast, onLogout,t]);

    return (
        <Box>
            {provider && profile ? (
                <User
                    provider={provider}
                    profile={profile}
                    onLogout={onLogoutSuccess}
                />
            ) : (
                <Box>
                    <LoginSocialGoogle
                        isOnlyGetToken
                        client_id={
                            process.env.REACT_APP_GG_APP_ID ||''}
                        scope={"https://www.googleapis.com/auth/userinfo.email"}
                        redirect_uri={REDIRECT_URI}
                        onLoginStart={onLoginStart}
                        onResolve={({ provider, data }) => {
                            setProvider(provider);
                            setProfile(data);
                        }}
                        onReject={(err) => {
                            console.error(err);
                        }}
                    >
                        <GoogleLoginButton />
                    </LoginSocialGoogle>
                </Box>
            )}
        </Box>
    );
};
