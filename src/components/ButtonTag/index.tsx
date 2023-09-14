import { IPressableProps, Pressable, Text } from 'native-base'
import { THEME } from '@theme'

type Props = IPressableProps & {
  name: string
  isActive: boolean
}

export function ButtonTag({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      h={25}
      mr={3}
      paddingX={3}
      bg={THEME.colors.WHITE}
      rounded="full"
      borderWidth={1}
      borderColor={THEME.colors.PURPLE}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        backgroundColor: THEME.colors.PURPLE,
      }}
      {...rest}
    >
      <Text
        color={isActive ? THEME.colors.WHITE : THEME.colors.PURPLE_DARK}
        fontSize={THEME.fontSize.TEXT.TAG}
        fontFamily={THEME.fontFamily.Roboto.BOLD}
      >
        {name}
      </Text>
    </Pressable>
  )
}
