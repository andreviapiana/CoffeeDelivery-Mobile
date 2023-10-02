import { THEME } from '@theme'
import { IPressableProps, Pressable, Text } from 'native-base'

type Props = IPressableProps & {
  name: string
  isActive: boolean
  isError: boolean
}

export function SizeFilter({ name, isActive, isError, ...rest }: Props) {
  return (
    <Pressable
      w={104}
      h={10}
      bg={THEME.colors.GRAY600}
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      borderWidth={2}
      borderColor={isError ? THEME.colors.RED_DARK : THEME.colors.GRAY600}
      _pressed={{
        borderColor: THEME.colors.PURPLE,
        backgroundColor: THEME.colors.WHITE,
      }}
      {...rest}
    >
      <Text
        color={isActive ? THEME.colors.PURPLE : THEME.colors.GRAY300}
        fontSize={THEME.fontSize.TEXT.SM}
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}
