import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    FormErrorMessage,
    FormHelperText,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CONFETTI_DARK, CONFETTI_LIGHT } from "../assests/images/Confetti";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const ContactUs = () => {
    const { hasCopied, onCopy } = useClipboard("example@example.com");
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isNameFocused, setNameFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isMessageFocused, setMessageFocused] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleMailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const isNameError = name === "";
    const isEmailError =
        email === "" ||
        !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
    const isMessageError = message === "" || message.length <= 5;

    useEffect(() => {
        if (!isNameError && !isEmailError && !isMessageError) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [isNameError, isEmailError, isMessageError]);

    return (
        <Flex
            bg={useColorModeValue("gray.100", "gray.900")}
            align="center"
            justify="center"
            css={{
                backgroundImage: useColorModeValue(
                    CONFETTI_LIGHT,
                    CONFETTI_DARK
                ),
                backgroundAttachment: "fixed",
            }}
            id="contact"
        >
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}
            >
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: "4xl",
                                md: "5xl",
                            }}
                            color="green.500"
                            _hover={{bg: "blue.500",
                            color: useColorModeValue(
                                "white",
                                "gray.700"
                            )
                         }}
                        >
                            {t("Get in Touch!")}
                        </Heading>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: "column", md: "row" }}
                        >
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: "row", md: "column" }}
                            >
                                <Tooltip
                                    label={
                                        hasCopied
                                            ? t("Email Copied!")
                                            : t("Copy Email")
                                    }
                                    closeOnClick={false}
                                    hasArrow
                                >
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        onClick={onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="#">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="twitter"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsTwitter size="28px" />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="#">
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: "blue.500",
                                            color: useColorModeValue(
                                                "white",
                                                "gray.700"
                                            ),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>

                            <Box
                                bg={useColorModeValue("white", "gray.700")}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue(
                                    "gray.700",
                                    "whiteAlpha.900"
                                )}
                                shadow="base"
                            >
                                <VStack spacing={5}>
                                    <FormControl
                                        isRequired
                                        isInvalid={isNameError && isNameFocused}
                                    >
                                        <FormLabel>{t("Name")}</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<BsPerson />}
                                                _hover={{ color: "green.500" }}
                                            />
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder={t("Your Name")}
                                                value={name}
                                                onChange={handleNameChange}
                                                onFocus={() =>
                                                    setNameFocused(true)
                                                }
                                            />
                                        </InputGroup>
                                        <FormHelperText>
                                            {t("Enter your name.")}
                                        </FormHelperText>
                                        {isNameError && isNameFocused && (
                                            <FormErrorMessage>
                                                {t("Name is required.")}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl
                                        isRequired
                                        isInvalid={
                                            isEmailError && isEmailFocused
                                        }
                                    >
                                        <FormLabel>{t("Email")}</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                children={<MdOutlineEmail />}
                                                _hover={{ color: "green.500" }}
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder={t("Your Email")}
                                                value={email}
                                                onChange={handleMailChange}
                                                onFocus={() =>
                                                    setEmailFocused(true)
                                                }
                                            />
                                        </InputGroup>
                                        <FormHelperText>
                                            {t("Enter your email.")}
                                        </FormHelperText>
                                        {isEmailError && isEmailFocused && (
                                            <FormErrorMessage>
                                                {t(
                                                    "Email is required and should be in correct format."
                                                )}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl
                                        isRequired
                                        isInvalid={
                                            isMessageError && isMessageFocused
                                        }
                                    >
                                        <FormLabel>{t("Message")}</FormLabel>
                                        <Textarea
                                            name="message"
                                            placeholder={t("Your Message")}
                                            rows={6}
                                            resize="vertical"
                                            value={message}
                                            onChange={handleMessageChange}
                                            onFocus={() =>
                                                setMessageFocused(true)
                                            }
                                        />
                                        <FormHelperText>
                                            {t(
                                                "Enter your message (at least 6 characters)."
                                            )}
                                        </FormHelperText>
                                        {isMessageError && isMessageFocused && (
                                            <FormErrorMessage>
                                                {t(
                                                    "Message is required and should be more than 5 characters."
                                                )}
                                            </FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <Button
                                        colorScheme="blue"
                                        bg="blue.400"
                                        color="white"
                                        _hover={{ bg: "green.500" }}
                                        _disabled={{
                                            bg: "gray.400",
                                            cursor: "not-allowed",
                                        }}
                                        isFullWidth
                                        isDisabled={!isFormValid}
                                    >
                                        {t("Send Message")}
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
};
