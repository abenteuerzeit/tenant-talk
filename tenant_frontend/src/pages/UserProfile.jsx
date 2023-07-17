import React from "react";
import { useUser } from "../components/auth_components/userProvider";
import {
    Avatar,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Badge,
    AvatarBadge,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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
                    >
                        <Heading as={"h1"}>
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
                        p={5}
                        w={["100%", "100%", "70%"]}
                        bg="white"
                        borderRadius={"2px"}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, reiciendis deserunt? Deserunt quia deleniti
                        placeat nulla quasi doloribus, optio unde illo dolores
                        neque voluptates, laborum, pariatur voluptas hic totam
                        assumenda.
                        <br />
                    </Box>
                </Stack>
            </Center>
        </>
    );
};

