import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../../assets/logo_primary.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const { colors } = useTheme();

  const handleChangeInputValue = (key: string, value: string) => {
    setSignInData((oldValue) => ({
      ...oldValue,
      [key]: value
    }))
  }

  const handleSignIn = () => {
    console.log(signInData);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="lg" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input 
        mb={4}
        placeholder='E-mail'
        InputLeftElement={
          <Icon 
            as={<Envelope color={colors.gray[300]} />}
            ml="4"
          />
        }
        value={signInData.email}
        onChangeText={(value) => handleChangeInputValue("email", value)}
      />
      <Input
        mb={8}
        placeholder="Senha"
        type='password'
        InputLeftElement={
          <Icon
            as={<Key color={colors.gray[300]} />}
            ml="4"
          />
        }
        value={signInData.password}
        onChangeText={(value) => handleChangeInputValue("password", value)}
      />

      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
      />
    </VStack>
  )
}

export default SignIn;