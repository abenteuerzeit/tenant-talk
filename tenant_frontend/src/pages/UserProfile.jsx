import React from "react";
// import Cookies from "js-cookie";
import { useUser } from "../components/auth_components/userProvider"
import { Avatar } from "@chakra-ui/react";


export const UserProfile = () => {
  const userData = useUser();
  
  return (
    <>
    <h1>Hello {userData.user.profile.name}</h1>
    <Avatar
    size={"2xl"}
    src={userData.user.profile.picture}>
      
    </Avatar>
      
    </>
  );
};