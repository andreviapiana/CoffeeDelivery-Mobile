import { Circle, HStack, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { THEME } from '@theme'

import { Ionicons, Feather } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { useCart } from '@hooks/useCart'
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'

type HeaderProps = {
  variant: 'Location' | 'BackButton' | 'Title'
  scrollValue?: SharedValue<any>
}

export function Header({ variant = 'Location', scrollValue }: HeaderProps) {
  // useCart p/ capturar a quandidade de itens e exibir no Header //
  const { cart } = useCart()

  // Navegando de volta //
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  // Navegando p/ o Carrinho //
  function handleGoToCart() {
    navigation.navigate('cart')
  }

  // ================ ANIMAÇÕES ================= //
  // Animação do Texto do Header (mudança de cor) //
  const headerTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollValue?.value,
        [0, 320],
        [THEME.colors.WHITE, THEME.colors.GRAY200],
      ),
    }
  })

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

          <Animated.Text
            style={[
              headerTextStyle,
              {
                paddingLeft: 4,
                fontFamily: THEME.fontFamily.Roboto.REGULAR,
                fontSize: THEME.fontSize.TEXT.SM,
              },
            ]}
          >
            Porto Alegre, RS
          </Animated.Text>
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

            {cart.length > 0 && (
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
                  {cart.length}
                </Text>
              </Circle>
            )}
          </TouchableOpacity>
        </HStack>
      )}
    </HStack>
  )
}
