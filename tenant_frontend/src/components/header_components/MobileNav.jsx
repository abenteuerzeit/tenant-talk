// This component renders the mobile version of the navigation bar
// It's shown when the screen width is less than the 'md' breakpoint
// The items in the navigation are taken from the NAV_ITEMS constant
// Each item is rendered by the MobileNavItem component
import {
    Collapse,
    Flex,
    Icon,
    Link,
    Text,
    Stack,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslatedItems } from "./MenuTexts";
import { Link as RouterLink } from "react-router-dom";

export const MobileNav = () => {
    const { NAV_ITEMS } = useTranslatedItems();

    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")} // Set background color
            p={4} // Add padding
            display={{ md: "none" }} // Hide on screens wider than 'md'
        >
            {NAV_ITEMS &&
                NAV_ITEMS.map(
                    (
                        navItem // Map through nav items
                    ) => (
                        <MobileNavItem key={navItem.label} {...navItem} /> // Display each item
                    )
                )}
        </Stack>
    );
};

// This component renders an individual navigation item
// If the item has children, they're rendered in a collapsible area (accordion style)
// It also handles changing the language when a language link is clicked
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure(); // State and functions for the collapse component
    const { i18n } = useTranslation(); // Translation hook

    // This function changes the current language
    const changeLanguage = (language) => {
        if (language) {
            i18n.changeLanguage(language); // Change language
            localStorage.setItem("language", language); // Store selected language in local storage
            onToggle(); // Collapse the language selection menu
        }
    };

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .5s ease-in-out"}
                        transform={isOpen ? "rotate(540deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link
                                as={RouterLink}
                                key={child.label}
                                py={2}
                                to={child.href}
                                onClick={() => {
                                    changeLanguage(child.languageCode);
                                    onToggle(); // Add this to close the menu after clicking
                                }}
                            >
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
