import React from "react";
import { useUser } from "../components/auth_components/userProvider";
import {
    Avatar,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    AvatarBadge,
    Tabs,
    Tab,
    TabList,
    TabIndicator,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export const UserProfile = () => {
    const userData = useUser();
    console.log(userData);

    return (
        <>
            <Center bg={"rgba(207, 213, 222)"} p={2}>
                <Stack
                    w={"96%"}
                    direction={["column", "column", "row"]}
                    spacing={4}
                >
                    <Box
                        p={5}
                        w={["100%", "100%", "30%"]}
                        bg="white"
                        h={"100%"}
                        borderRadius={"2px"}
                        textAlign={"center"}
                        mt={"10px"}
                    >
                        <Heading as={"h2"}>
                            {userData.user.profile.name}
                        </Heading>
                        <Text>
                            @
                            {userData.user.profile.name
                                .replace(/\s/g, "")
                                .toLowerCase()}
                        </Text>
                        <Avatar
                            m={4}
                            size="2xl"
                            src={userData.user.profile.picture}
                            shadow={"0px 2px 5px black"}
                        >
                            <AvatarBadge boxSize={"70px"} border={"none"}>
                                <Avatar
                                    icon={<EditIcon />}
                                    bg={"red"}
                                    size={"sm"}
                                />
                            </AvatarBadge>
                        </Avatar>
                    </Box>

                    <Box
                        w={["100%", "100%", "70%"]}
                        bg="white"
                        borderRadius={"2px"}
                    >
                        <Box
                            bg={"blackAlpha.100"}
                            w={"100%"}
                            h={[null, "119.5px", "122.5px"]}
                            
                        >
                            <Heading as={"h1"} p={5} ml={5}>
                                Edit Profile
                            </Heading>
                            <Tabs
                                position={"relative"}
                                variant={"unstyled"}
                                ml={5}
                            >
                                <TabList>
                                    <Tab>User Info</Tab>
                                    <Tab>Billing Information</Tab>
                                </TabList>
                                <TabIndicator
                                    mt="-1.5px"
                                    height="2px"
                                    bg="blue.500"
                                    borderRadius="1px"
                                />
                                <TabPanels>
                                    <TabPanel>
                                        <p>one!</p> {/* Component with ability to change full name, username, password, email address etc. */}
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Box>
                </Stack>
            </Center>
        </>
    );
};

