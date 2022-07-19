import {
  Button as NativeBaseButton,
  IButtonProps as INativeBaseButtonProps,
  Heading
} from 'native-base';

interface IButtonProps extends INativeBaseButtonProps{
  title: string;
}

const Button = ({
  title,
  ...rest
}: IButtonProps) => {
  return (
    <NativeBaseButton
      bg="green.700"
      h="14"
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading
        fontSize="md"
        color="white"
      >
        {title}
      </Heading>
    </NativeBaseButton>
  )
}

export default Button;