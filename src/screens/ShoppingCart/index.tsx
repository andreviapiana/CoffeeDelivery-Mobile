import {
  VStack,
  Text,
  Icon,
  Center,
  FlatList,
  useToast,
  View,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, StatusBar } from 'react-native'

import { THEME } from '@theme'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { CartFooter } from './components/CartFooter'
import { CartCard } from './components/CartCard'

import { Ionicons, Feather } from '@expo/vector-icons'
import { useCart } from '@hooks/useCart'

import Animated, {
  Easing,
  Keyframe,
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'
import { Swipeable } from 'react-native-gesture-handler'

const SCREEN_WIDTH = Dimensions.get('screen').width

export function ShoppingCart() {
  // useCart p/ capturar a quantidade e remover os itens //
  const { cart, removeProductCart, clearShopCart } = useCart()

  // Navegação p/ a página Finish //
  const navigation = useNavigation()

  function handleFinish() {
    clearShopCart()
    navigation.navigate('finish')
  }

  // Função de Remover o Item do Carrinho //
  const toast = useToast()
  async function handleItemRemove(uniqueId: string) {
    try {
      await removeProductCart(uniqueId)

      toast.show({
        title: 'Produto removido',
        placement: 'top',
        bgColor: 'green.500',
      })
    } catch (error) {
      toast.show({
        title: 'Não foi possível remover o produto',
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  // Total do Carrinho //
  const cartTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity!,
    0,
  )

  // Animação de Entrada //
  const enteringKeyFrame = new Keyframe({
    0: {
      transform: [{ translateX: +SCREEN_WIDTH }],
      easing: Easing.exp,
    },
    100: {
      transform: [{ translateX: 0 }],
      easing: Easing.exp,
    },
  })

  return (
    <Animated.View
      entering={enteringKeyFrame}
      style={{
        height: '100%',
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack flex={1} pt={44} backgroundColor={THEME.colors.GRAY800}>
        <Header variant={'Title'} />

        {cart.length === 0 ? (
          <Center marginBottom={8} marginTop={16} paddingX={16}>
            <Icon
              as={<Ionicons name="cart" />}
              color={THEME.colors.GRAY400}
              size={6}
            />
            <Text
              marginTop={3}
              marginBottom={8}
              fontFamily={THEME.fontFamily.Roboto.REGULAR}
              fontSize={THEME.fontSize.TEXT.SM}
              color={THEME.colors.GRAY400}
            >
              Seu carrinho está vazio
            </Text>

            <Button title={'VER CATÁLOGO'} variant={'secondary'} />
          </Center>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id + item.size}
            renderItem={({ item }) => (
              <Animated.View
                key={item.id}
                entering={SlideInRight}
                exiting={SlideOutRight}
                layout={Layout.springify()}
              >
                <Swipeable
                  overshootLeft={false}
                  containerStyle={{
                    width: '100%',
                    backgroundColor: THEME.colors.RED_LIGHT,
                  }}
                  onSwipeableOpen={() => handleItemRemove(item.uniqueId)}
                  renderLeftActions={() => (
                    <View
                      width={'100%'}
                      height={'100%'}
                      justifyContent={'center'}
                      paddingX={8}
                    >
                      <Icon
                        as={<Feather name="trash-2" />}
                        color={THEME.colors.RED_DARK}
                        size={7}
                      />
                    </View>
                  )}
                >
                  <CartCard
                    data={item}
                    onRemove={() => handleItemRemove(item.uniqueId)}
                  />
                </Swipeable>
              </Animated.View>
            )}
            _contentContainerStyle={{
              paddingBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
          />
        )}

        {cart.length > 0 && (
          <CartFooter onPress={handleFinish} totalValue={cartTotal} />
        )}
      </VStack>
    </Animated.View>
  )
}
