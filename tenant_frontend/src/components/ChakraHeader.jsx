// Import all the necessary packages
import {
    Box,
    Collapse,
    Flex,
    IconButton,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Logo } from "../assests/images/Logo";
import { UserNav } from "./header_components/UserNav";
import { DesktopNav } from "./header_components/DesktopNav";
import { MobileNav } from "./header_components/MobileNav";
import { SearchBar } from "./header_components/SearchBar";

// The header component which will be exported and used in the main application
export const ChakraHeader = () => {
    // The isOpen state and the onToggle function to handle the collapse functionality
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            {/*The main header with some theming and alignment */}
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                {/* The button for opening the mobile navigation */}
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                {/* The logo and desktop navigation */}
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: "center", md: "start" }}
                >
                    <Logo color={useColorModeValue("gray.700", "white")} />
                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <UserNav />
            </Flex>
            {/* The mobile navigation, mode selector and search bar */}
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
                <SearchBar />
            </Collapse>
        </Box>
    );
};

export default ChakraHeader;
