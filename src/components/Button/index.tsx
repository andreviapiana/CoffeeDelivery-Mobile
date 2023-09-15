import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'
import { THEME } from '@theme'

type Props = IButtonProps & {
  title: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

export function Button({ title, variant, size = 'large', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w={size === 'large' ? 'full' : 'auto'}
      h={'46px'}
      bg={
        variant === 'primary'
          ? THEME.colors.YELLOW_DARK
          : THEME.colors.PURPLE_DARK
      }
      rounded="md"
      _pressed={{
        bg: variant === 'primary' ? THEME.colors.YELLOW : THEME.colors.PURPLE,
      }}
      {...rest}
    >
      <Text
        color={THEME.colors.WHITE}
        fontFamily={THEME.fontFamily.Roboto.BOLD}
        fontSize={THEME.fontSize.TEXT.BUTTON}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
