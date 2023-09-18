import { Circle, HStack, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { THEME } from '@theme'

import { Ionicons, Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  variant: 'Location' | 'BackButton' | 'Title'
}

export function Header({ variant = 'Location' }: HeaderProps) {
  const hasItens = true

  // Navegando de volta //
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  // Navegando p/ o Carrinho //
  function handleGoToCart() {
    navigation.navigate('cart')
  }

  return (
    <HStack
      px={8}
      py={5}
      borderBottomColor={
        variant === 'Title' ? THEME.colors.GRAY500 : THEME.colors.GRAY100
      }
      borderBottomWidth={1}
      justifyContent={'space-between'}
    >
      {variant === 'Location' ? (
        <HStack width={'150px'}>
          <Icon
            as={<Ionicons name="location-sharp" />}
            color={THEME.colors.PURPLE}
            size={5}
          />

          <Text
            color={THEME.colors.WHITE}
            paddingLeft={1}
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.SM}
          >
            Porto Alegre, RS
          </Text>
        </HStack>
      ) : (
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color={
              variant === 'BackButton'
                ? THEME.colors.WHITE
                : THEME.colors.GRAY200
            }
            size={6}
          />
        </TouchableOpacity>
      )}

      {variant === 'Title' ? (
        <HStack
          position={'absolute'}
          left={'50%'}
          top={'50%'}
          bottom={'50%'}
          alignItems={'center'}
        >
          <Text
            color={THEME.colors.GRAY200}
            fontFamily={THEME.fontFamily.Baloo2.BOLD}
            fontSize={THEME.fontSize.TEXT.MD}
          >
            Carrinho
          </Text>
        </HStack>
      ) : (
        <HStack>
          <TouchableOpacity onPress={handleGoToCart}>
            <Icon
              as={<Ionicons name="cart" />}
              color={
                variant === 'Location'
                  ? THEME.colors.YELLOW
                  : THEME.colors.WHITE
              }
              size={5}
            />

            {hasItens && (
              <Circle
                borderRadius={'full'}
                width={5}
                height={5}
                backgroundColor={THEME.colors.PURPLE}
                position={'absolute'}
                right={-16}
                top={-16}
              >
                <Text
                  fontFamily={THEME.fontFamily.Roboto.REGULAR}
                  fontSize={THEME.fontSize.TEXT.XS}
                  color={THEME.colors.WHITE}
                >
                  2
                </Text>
              </Circle>
            )}
          </TouchableOpacity>
        </HStack>
      )}
    </HStack>
  )
}
