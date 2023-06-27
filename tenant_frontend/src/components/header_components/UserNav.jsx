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
    const { colorMode, toggleColorMode } = useColorMode(); // Hooks for handling color mode (dark/light)

    const { USER_MENU_ITEMS } = useTranslatedItems(isLoggedIn, logout); // Getting the translated menu items

    const { t } = useTranslation(); // Hook for handling translations
    const { user, setUser } = useUser(); // Hooks for handling the user state
    const toast = useToast(); // Hook for displaying toast notifications

    // Function to handle the logout action
    const onLogoutSuccess = useCallback(() => {
        setUser(null); // Remove user from state
        localStorage.removeItem("user"); // Remove user from local storage
        toast({ // Display a toast notification
            title: t("Logout Successful"),
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
        });
        if (logout) { 
            logout(); // Invoke the provided logout function, if any
        }
    }, [toast, logout, setUser, t]); 

    // Function to check if a menu item is the logout item
    const isLogout = (name) => name === t("Logout");

    return (
        // The top level navigation bar
        <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
        >
            {/* Button for toggling the color mode */}
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {/* User menu */}
            <Menu>
                {/* The button that triggers the user menu */}
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar size={"sm"} src={user?.profile?.picture} />
                </MenuButton>
                {/* The user menu itself */}
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
                    {/* Render the menu items */}
                    {USER_MENU_ITEMS &&
                        USER_MENU_ITEMS.map((menuItem) => (
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
