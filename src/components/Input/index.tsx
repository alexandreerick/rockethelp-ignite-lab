import { Input as NativeBaseInput, IInputProps } from 'native-base';

const Input = (props: IInputProps) => {
  return (
    <NativeBaseInput 
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      autoCorrect={false}
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...props}
    />
  )
}

export default Input;