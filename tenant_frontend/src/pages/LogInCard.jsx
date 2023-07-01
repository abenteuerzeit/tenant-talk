// Importing necessary packages and components
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ChakraSocialAuth } from '../components/ChakraSocialAuth';
import { useState } from 'react';

// LoginCard component
export const LogInCard = () => {
    // Use i18next hook for translations
    const { t } = useTranslation();

    // State for the email input
    const [input, setInput] = useState('')
    // Function to update email state on input change
    const handleInputChange = (e) => setInput(e.target.value)
    // Check if email input is empty
    const isError = input === ''

    // Return JSX for the LoginCard component
    return (
        // Flex container for centering the login card
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            {/* // Stack for spacing between elements */}
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                {/* // Header */}
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>{t("Sign in to your account")}</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        {t("to enjoy all of our cool")} <Link color={'blue.400'}>{t("features")}</Link> ✌️
                    </Text>
                </Stack>
                {/* // Box for the login form */}
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    {/* // Stack for spacing between form elements */}
                    <Stack spacing={4}>
                        {/* // Form control for email input */}
                        <FormControl id="email" isRequired>
                            <FormLabel>{t("Email address")}</FormLabel>
                            <Input type="email" value={input} onChange={handleInputChange} autoComplete='off'/>
                            {/* // Conditional rendering for error message */}
                            {!isError ? (
                                <FormHelperText>{t("Enter your email.")}</FormHelperText>
                            ) : (
                                <FormErrorMessage>{t("Email is required.")}</FormErrorMessage>
                            )}
                        </FormControl>
                        {/* // Form control for password input */}
                        <FormControl id="password" isRequired>
                            <FormLabel>{t("Password")}</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        {/* // Stack for the remaining elements in the form */}
                        <Stack spacing={10}>
                            {/* // Stack for "Remember me" checkbox and "Forgot password" link */}
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox name='rememberMeCheckbox'>{t("Remember me")}</Checkbox>
                                <Link color={'blue.400'}>{t("Forgot password?")}</Link>
                            </Stack>
                            {/* // Button for submitting the form */}
                            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                                {t("Sign in")}
                            </Button>
                            {/* // Text for social login */}
                            <Text fontSize={'md'} color={'gray.600'} align={"center"}>{t("Or use your social account 😼")}</Text>
                            {/* // Social login buttons */}
                            <ChakraSocialAuth />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
