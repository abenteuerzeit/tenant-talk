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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {  Trans } from "react-i18next";
import { useTranslatedItems } from "./MenuTexts";

// User menu and color theme switcher

export const UserNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { MENU_ITEMS } = useTranslatedItems;


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
                    <Avatar
                        size={"sm"}
                        src={
                            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                    />
                </MenuButton>
                <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                        <Avatar
                            size={"2x1"}
                            src={
                                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                            }
                        />
                    </Center>
                    <br />
                    <Center>
                        <p>
                            <Trans i18nKey="Username">Username</Trans>
                        </p>
                    </Center>
                    <br />
                    <MenuDivider />
                    {MENU_ITEMS && MENU_ITEMS.map((menuItem) => (
                        <MenuItem key={menuItem.name}>
                            {!menuItem.special ? (
                                <Button
                                    as={"a"}
                                    fontSize={"sm"}
                                    fontWeight={400}
                                    variant={"link"}
                                    href={menuItem.link}
                                >
                                    {menuItem.name}
                                </Button>
                            ) : (
                                <Button
                                    as={"a"}
                                    display={{
                                        base: "none",
                                        md: "inline-flex",
                                    }}
                                    fontSize={"sm"}
                                    fontWeight={600}
                                    color={"white"}
                                    bg={"pink.400"}
                                    href={menuItem.link}
                                    _hover={{
                                        bg: "pink.300",
                                    }}
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
