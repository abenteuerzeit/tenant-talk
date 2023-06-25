import { useCallback } from "react";
import {
    Avatar,
    Button,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuDivider,
    MenuList,
    Stack,
    useColorMode,
    useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTranslatedItems } from "./MenuTexts";
import { useUser } from "../auth_components/userProvider";

export const UserNav = ({ isLoggedIn, logout }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { MENU_ITEMS } = useTranslatedItems(isLoggedIn, logout);
    const { t } = useTranslation();
    const { user, setUser } = useUser();
    const toast = useToast();

    const onLogoutSuccess = useCallback(() => {
        setUser(null);
        localStorage.removeItem("user");
        toast({
            title: t("Logout Successful"),
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
        });
        if (logout) {
            logout();
        }
    }, [toast, logout, setUser, t]);

    const isLogout = (name) => name === t("Logout");

    return (
        <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
        >
            {/* The button for toggling the color mode */}
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {/* The userNavigation menu */}
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar size={"sm"} src={user?.profile?.picture} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                        <Avatar size={"2x1"} src={user?.profile?.picture} />
                    </Center>
                    <br />
                    <Center>
                        <p>
                            {user
                                ? `${t("Hello")}, ${user.profile.given_name}!`
                                : t("Hello, Anonym!")}
                        </p>
                    </Center>
                    <br />
                    <MenuDivider />
                    {MENU_ITEMS &&
                        MENU_ITEMS.map((menuItem) => (
                            <MenuItem
                                key={menuItem.name}
                                onClick={
                                    isLogout(menuItem.name)
                                        ? onLogoutSuccess
                                        : null
                                }
                            >
                                {!menuItem.special ? (
                                    <Button
                                        as={Link}
                                        fontSize={"sm"}
                                        fontWeight={400}
                                        variant={"link"}
                                        to={menuItem.link}
                                    >
                                        {menuItem.name}
                                    </Button>
                                ) : (
                                    <Button
                                        as={Link}
                                        display={{
                                            base: "none",
                                            md: "inline-flex",
                                        }}
                                        fontSize={"sm"}
                                        fontWeight={400}
                                        color={"white"}
                                        bg={"pink.400"}
                                        to={menuItem.link}
                                        _hover={{ bg: "pink.300" }}
                                    >
                                        {menuItem.name}
                                    </Button>
                                )}
                            </MenuItem>
                        ))}
                </MenuList>
            </Menu>
        </Stack>
    );
};
