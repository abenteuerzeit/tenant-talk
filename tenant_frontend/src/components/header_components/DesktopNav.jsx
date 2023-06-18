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
import { NAV_ITEMS } from "./MenuTexts";
import { SearchBar } from "./SearchBar";


export const DesktopNav = () => {
    const { t } = useTranslation();
    const color = useColorModeValue("gray.600", "gray.200");
    const hoverColor = useColorModeValue("gray.800", "white");
    const popoverContentColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
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

// The navigation items for the desktop version of the navigation

// The sub-navigation items for the desktop version of the navigation
const DesktopSubNav = ({ label, href, subLabel, languageCode }) => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (language) => {
        if (language) {
            i18n.changeLanguage(language);
            localStorage.setItem("language", language);
        }
    };

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

