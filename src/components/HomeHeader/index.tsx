import { HStack, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '@theme'

export function HomeHeader() {
  return (
    <HStack justifyContent={'space-between'} px={8} py={5}>
      <HStack>
        <Icon
          as={<Ionicons name="location-sharp" />}
          color={THEME.colors.PURPLE}
          size={5}
        />

        <Text
          color={THEME.colors.WHITE}
          paddingLeft={1}
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.XS}
        >
          Porto Alegre, RS
        </Text>
      </HStack>
      <Icon
        as={<Ionicons name="cart" />}
        color={THEME.colors.YELLOW}
        size={5}
      />
    </HStack>
  )
}
