import React from "react";
// import Cookies from "js-cookie";
import { useUser } from "../components/auth_components/userProvider"
import { Avatar, Box, Center, Heading, Text } from "@chakra-ui/react";


export const UserProfile = () => {
  const userData = useUser();
  
  return (
    <>
    <Center>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box>
          <Avatar border={"1px solid red"} m={4} size="2xl" src={userData.user.profile.picture} />
        </Box>

        <Box>
          <Heading>
            Hello, {userData.user.profile.given_name} !
          </Heading>
        </Box>

        <Box>
          <Text>
            This is your profile page. You can view your profile information and change your details if you feel like.
          </Text>
        </Box>

      </Box>
      
    </Center>
    
    
      
    </>
  );
};