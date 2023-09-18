import { VStack, ScrollView, Text, Icon, Center, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { THEME } from '@theme'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { CartFooter } from './components/CartFooter'
import { CartCard } from './components/CartCard'

import { Ionicons } from '@expo/vector-icons'

export function ShoppingCart() {
  const cart = '1'

  // Navegação p/ a página Finish //
  const navigation = useNavigation()

  function handleFinish() {
    navigation.navigate('finish')
  }

  // Função de Remover o Item do Carrinho //
  function handleRemove() {
    console.log('Removeu o item do carrinho')
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack flex={1} pt={44} backgroundColor={THEME.colors.GRAY800}>
        <Header variant={'Title'} />

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          marginTop={cart.length === 0 ? 16 : 0}
          paddingX={cart.length === 0 ? 16 : 0}
        >
          {cart.length === 0 ? (
            <Center marginBottom={8}>
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
            <View>
              <CartCard onPress={handleRemove} />
            </View>
          )}
        </ScrollView>

        {cart.length > 0 && <CartFooter onPress={handleFinish} />}
      </VStack>
    </>
  )
}
