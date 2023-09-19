import {
  Box,
  FlatList,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base'
import { useEffect, useState } from 'react'

import { THEME } from '@theme'

import { Header } from '@components/Header'
import { QuantitySelector } from '@components/QuantitySelector'
import { SizeFilter } from '@components/SizeFilter'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'

import CoffeeImg from '../../assets/coffee.png'
import Smoke3Svg from '../../assets/Smoke3.svg'

import { useNavigation, useRoute } from '@react-navigation/native'

import { CoffeesDTO } from '@dtos/CoffeesDTO'
import { dataCoffee } from '@storage/coffeesData'

type RouteParamsProps = {
  productId: number
}

export function Details() {
  // Opções de tamanho dos Cafés //
  const coffeesSizes = ['114ml', '140ml', '227ml']

  // State para Salvar o filtro de Tamanho Selecionado //
  const [groupSelected, setGroupSelected] = useState('')

  // Navegação p/ a página Cart //
  const navigation = useNavigation()

  // Função de adicionar ao carrinho //
  async function handleAddToCart() {
    console.log('Adicionou o café ao carrinho')
    navigation.navigate('cart')
  }

  // Recebendo o ID pela Rota //
  const route = useRoute()
  const { productId } = route.params as RouteParamsProps

  // State para Armazenar o Café Buscado //
  const [coffee, setCoffee] = useState<CoffeesDTO>()

  const [isLoading, setIsLoading] = useState(false)

  // Função para Buscar o Café pelo ID da Rota //
  async function handleGetCoffeeById() {
    try {
      setIsLoading(true)
      const filteredCoffee = dataCoffee.filter(
        (item) => item.id === productId,
      )[0] as CoffeesDTO
      setCoffee(filteredCoffee)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  // UseEffect p/ Disparar a Busca do Café pelo ID //
  useEffect(() => {
    handleGetCoffeeById()
  }, [productId])

  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <VStack height={575} pt={44} backgroundColor={THEME.colors.GRAY100}>
            <Header variant={'BackButton'} />

            <VStack paddingX={8} paddingTop={3} paddingBottom={8}>
              <Box
                paddingY={1}
                paddingX={2}
                backgroundColor={THEME.colors.GRAY200}
                borderRadius={100}
                alignSelf={'flex-start'}
              >
                <Text
                  fontFamily={THEME.fontFamily.Roboto.BOLD}
                  fontSize={THEME.fontSize.TEXT.TAG}
                  color={THEME.colors.WHITE}
                >
                  {coffee?.category}
                </Text>
              </Box>

              <HStack
                alignItems={'baseline'}
                width={'auto'}
                justifyContent={'space-between'}
              >
                <Text
                  fontFamily={THEME.fontFamily.Baloo2.BOLD}
                  fontSize={THEME.fontSize.TITLE.LG}
                  lineHeight={'md'}
                  color={THEME.colors.WHITE}
                >
                  {coffee?.name}
                </Text>

                <HStack alignItems={'baseline'}>
                  <Text
                    fontFamily={THEME.fontFamily.Baloo2.BOLD}
                    fontSize={THEME.fontSize.TEXT.XS}
                    color={THEME.colors.YELLOW_DARK}
                    marginRight={1}
                  >
                    R$
                  </Text>
                  <Text
                    fontFamily={THEME.fontFamily.Baloo2.BOLD}
                    fontSize={THEME.fontSize.TITLE.XL}
                    color={THEME.colors.YELLOW_DARK}
                  >
                    {coffee &&
                      new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                      }).format(coffee?.price / 100)}
                  </Text>
                </HStack>
              </HStack>
              <Text
                fontFamily={THEME.fontFamily.Roboto.REGULAR}
                fontSize={THEME.fontSize.TEXT.MD}
                color={THEME.colors.GRAY500}
                marginTop={5}
              >
                {coffee?.description}
              </Text>
            </VStack>

            <View alignItems={'center'}>
              <Smoke3Svg width={64} height={137} />
              <Image
                source={CoffeeImg}
                alt="Imagem de uma xícara de café quente"
                marginTop={'-70px'}
                zIndex={-1}
                height={260}
                width={295}
              />
            </View>
          </VStack>

          <VStack paddingX={8}>
            <Text
              fontFamily={THEME.fontFamily.Roboto.REGULAR}
              fontSize={THEME.fontSize.TEXT.SM}
              color={THEME.colors.GRAY400}
              marginTop={10}
            >
              Selecione o tamanho:
            </Text>

            <View justifyContent={'center'} alignItems={'center'}>
              <FlatList
                data={coffeesSizes}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <SizeFilter
                    name={item}
                    isActive={groupSelected === item}
                    onPress={() => setGroupSelected(item)}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => {
                  return (
                    <View
                      style={{
                        height: '100%',
                        width: 8,
                      }}
                    />
                  )
                }}
                _contentContainerStyle={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                my={2}
                maxH={10}
                minH={10}
              />
            </View>
          </VStack>

          <HStack
            height={62}
            marginX={8}
            marginTop={5}
            marginBottom={10}
            padding={2}
            space={4}
            borderRadius={'md'}
            alignItems={'center'}
            backgroundColor={THEME.colors.GRAY700}
          >
            <QuantitySelector />

            <Button flex={1} title="ADICIONAR" onPress={handleAddToCart} />
          </HStack>
        </ScrollView>
      )}
    </VStack>
  )
}
