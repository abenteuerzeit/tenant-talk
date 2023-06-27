import {
    Box,
    Flex,
    Icon,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import { useTranslation, Trans } from "react-i18next";
import { useTranslatedItems } from "./MenuTexts";
import { SearchBar } from "./SearchBar";


// The component renders the desktop version of the navigation menu
export const DesktopNav = () => {
    // Use the translation hook and get the translated navigation items
    const { NAV_ITEMS } = useTranslatedItems();
    const { t } = useTranslation();

    // Define color variables for different color modes
    const color = useColorModeValue("gray.600", "gray.200");
    const hoverColor = useColorModeValue("gray.800", "white");
    const popoverContentColor = useColorModeValue("white", "gray.800");

    // Render the navigation items in a row
    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    {/* // Each navigation item is wrapped in a Popover for hover-triggered dropdowns */}
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            {/* // Link element for the navigation item */}
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={color}
                                _hover={{
                                    textDecoration: "none",
                                    color: hoverColor,
                                }}
                            >
                                <Trans i18nKey={navItem.label}>
                                    {t(navItem.label)}
                                </Trans>
                            </Link>
                        </PopoverTrigger>

                        {/* // If the navigation item has children, render them in a dropdown */}
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        // // Render each child navigation item using the DesktopSubNav component
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}

            {/* // A SearchBar component aligned to the end */}
            <Flex
                flex={{ base: 2 }}
                justify={{ base: "center", md: "end" }}
                ml={20}
            >
                <SearchBar />
            </Flex>
        </Stack>
    );
};

// The sub-navigation items for the desktop version of the navigation
const DesktopSubNav = ({ label, href, subLabel, languageCode }) => {
    const { i18n, t } = useTranslation();

    // The function to change the language of the app
    const changeLanguage = (language) => {
        if (language) {
            i18n.changeLanguage(language);
            localStorage.setItem("language", language);
        }
    };

    // Render the sub-navigation items and language change button
        return (
        <Link
            href={href}
            onClick={() => changeLanguage(languageCode)}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        <Trans i18nKey={label}>{t(label)}</Trans>
                    </Text>
                    {subLabel && (
                        <Text fontSize={"sm"}>
                            <Trans i18nKey={subLabel}>{t(subLabel)}</Trans>
                        </Text>
                    )}
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};
