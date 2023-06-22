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
  
  export const LogInCard = () => {
    const {t} = useTranslation();
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>{t("Sign in to your account")}</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {t("to enjoy all of our cool ")}<Link color={'blue.400'}>{t("features")}</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>{t("Email address")}</FormLabel>
                <Input type="email" 
                value={input} 
                onChange={handleInputChange}/>
                {!isError ? (
          <FormHelperText>
            {t("Enter the email you'd like to receive the newsletter on.")}
          </FormHelperText>
        ) : (
          <FormErrorMessage>{t("Email is required.")}</FormErrorMessage>
        )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>{t("Password")}</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>{t("Remember me")}</Checkbox>
                  <Link color={'blue.400'}>{t("Forgot password?")}</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  {t("Sign in")}
                </Button>
                <Text fontSize={'md'} color={'gray.600'} align={"center"}>
              {t("Or use your social account 😼")}
            </Text>
            <ChakraSocialAuth />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
