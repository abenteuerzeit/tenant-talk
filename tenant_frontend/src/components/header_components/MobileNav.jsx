// The navigation items for the mobile version of the navigation
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

export const MobileNav = () => {
    const { NAV_ITEMS } = useTranslatedItems();

    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS && NAV_ITEMS.map((navItem) => ( 
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

/// The individual navigation items for the mobile version of the navigation
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        if (language) {
            i18n.changeLanguage(language);
            localStorage.setItem("language", language);
            onToggle();
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
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
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
                                key={child.label}
                                py={2}
                                href={child.href}
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
