import { THEME } from '@theme'
import { IPressableProps, Pressable, Text } from 'native-base'

type Props = IPressableProps & {
  name: string
  isActive: boolean
}

export function SizeFilter({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      w={104}
      h={10}
      bg={THEME.colors.GRAY700}
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: THEME.colors.PURPLE,
        borderWidth: 1,
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
