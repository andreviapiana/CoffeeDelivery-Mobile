import {
  Center,
  HStack,
  StatusBar,
  VStack,
  Text,
  View,
  SectionList,
} from 'native-base'
import { useEffect, useRef, useState } from 'react'

import { THEME } from '@theme'

import { Header } from '@components/Header'
import { Search } from '@components/Search'
import { Carousel } from '@components/Carousel'
import { CategoryButtonTag } from './components/CategoryButtonTag'
import { CoffeeCardHorizontal } from '@components/CoffeeCardHorizontal'

import CoffeGrainSvg from '../../assets/coffee_grain.svg'

import { CoffeeSection, dataCoffee } from '@storage/coffeesData'

import { getAllCoffees } from '@services/getAllCoffes'

import { CoffeesDTO } from '@dtos/CoffeesDTO'
import { getThreeRandomCoffeesInCarousel } from '@services/getThreeRandomCoffeesInCarousel'

import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
  SlideInRight,
  SlideInUp,
  withTiming,
  Easing,
} from 'react-native-reanimated'

import { useNavigation } from '@react-navigation/native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export function Home() {
  // Navegação p/ a página Details //
  const navigation = useNavigation()

  function handleGoToDetails(productId: string) {
    navigation.navigate('details', { productId })
  }

  // Loading //
  const [isSearching, setIsSearching] = useState(false)

  // Armazenando o Search //
  const [search, setSearch] = useState('')

  // State p/ Salvar os Cafés com Categoria separada p/ usar na SectionList //
  const [listSection, setListSection] = useState<CoffeeSection[]>([])

  // Armazenando o Botão da Categoria selecionada //
  const [selectedCategory, setSelectedCategory] = useState(dataCoffee[0].title)

  // Função de Fetch dos Cafés pela categoria ou pelo Search //
  function getLoadingData() {
    setIsSearching(true)

    const coffeeList = getAllCoffees({ search })

    setListSection(coffeeList)
    setSearch('')
    setIsSearching(false)
  }

  // State para Armazenar os 3 Cafés Randômicos do Carousel //
  const [dataCarrousel, setDataCarrousel] = useState<CoffeesDTO[]>(
    getThreeRandomCoffeesInCarousel(),
  )

  // Disparando a função de Fetch //
  useEffect(() => {
    getLoadingData()
  }, [])

  // Disparando a Busca de 3 Cafés p/ o Carousel //
  useEffect(() => {
    setDataCarrousel(getThreeRandomCoffeesInCarousel())
  }, [])

  // ============================== ANIMAÇÕES ============================== //
  // Status para a cor da StatusBar (ela muda de light p/ dark baseado no scroll) //
  const [isUpdateColorStatusBar, setIsUpdateColorStatusBar] = useState(false)

  // Armazenando a REF da SectionList para fazer o Pan //
  const sectionListRef = useRef<any>(null)

  // Captura do valor do scrollY da ScrollView //
  const scrollY = useSharedValue(0)

  // Função do Scroll das Categorias //
  const handleScrollToSection = (category: string) => {
    const index = listSection.findIndex((item) => item.title === category)
    if (index !== -1 && sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        viewOffset: 0,
        animated: true,
      })
      setSelectedCategory(category)
    } else if (index === -1) {
      getLoadingData()
      setSelectedCategory(dataCoffee[0].title)
    }
  }

  // State com a Posição do Bloco do Search + Carousel //
  const introContainerPosition = useSharedValue(0)

  // Configs do Pan p/ Arrastar a tela para Cima //
  const onPanUp = Gesture.Pan()
    .activateAfterLongPress(200)
    .onUpdate((event) => {
      if (event.translationY < 0) {
        introContainerPosition.value = event.translationY
        // Atualização da cor da StatusBar //
        runOnJS(setIsUpdateColorStatusBar)(true)
      } else {
        introContainerPosition.value = scrollY.value + event.translationY
        // Atualização da cor da StatusBar //
        runOnJS(setIsUpdateColorStatusBar)(false)
      }
    })
    .onEnd((event) => {
      if (event.translationY < -20) {
        introContainerPosition.value = withTiming(-220, {
          duration: 600,
          easing: Easing.inOut(Easing.quad),
        })
      }

      scrollY.value = event.translationY <= -220 ? -220 : event.translationY
    })

  // Animação do Header //
  const headerAnimatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        introContainerPosition.value,
        [0, -180],
        [THEME.colors.GRAY100, THEME.colors.GRAY900],
      ),
      height: interpolate(
        introContainerPosition.value,
        [0, -180],
        [120, 96],
        Extrapolate.CLAMP,
      ),
      borderBottomWidth: interpolate(
        introContainerPosition.value,
        [0, -180],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      borderBottomColor: interpolateColor(
        introContainerPosition.value,
        [0, -180],
        ['transparent', THEME.colors.GRAY800],
      ),
    }
  })

  // Animação do bloco do Search (mudança de opacidade do fundo) //
  const introContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        introContainerPosition.value,
        [0, -180],
        [0, -488],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(
        introContainerPosition.value,
        [-10, -150],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    }
  })

  // Animação da Box dos botões de Categoria //
  const coffeeFilterContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      borderBottomWidth: interpolate(
        introContainerPosition.value,
        [0, -180],
        [0, 1],
        Extrapolate.CLAMP,
      ),
      borderBottomColor: interpolateColor(
        introContainerPosition.value,
        [0, -180],
        ['transparent', THEME.colors.GRAY800],
      ),
    }
  })

  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <StatusBar
        barStyle={isUpdateColorStatusBar ? 'dark-content' : 'light-content'}
        translucent
      />

      <Animated.View entering={SlideInUp.duration(500)}>
        <Animated.View
          style={[
            headerAnimatedStyles,
            {
              paddingTop: 44,
              zIndex: 999,
            },
          ]}
        >
          <Header
            variant={'Location'}
            introContainerPosition={introContainerPosition}
          />
        </Animated.View>

        <Animated.View
          style={[
            introContainerAnimatedStyles,
            {
              height: 270,
              backgroundColor: THEME.colors.GRAY100,
            },
          ]}
        >
          <Search
            search={search}
            setSearch={setSearch}
            isSearching={isSearching}
            onPress={getLoadingData}
          />

          <HStack marginRight={1} justifyContent={'flex-end'} marginTop={-5}>
            <CoffeGrainSvg />
          </HStack>
        </Animated.View>

        <Animated.View entering={SlideInRight.duration(1000)}>
          <Center marginTop={-112}>
            <Carousel coffees={dataCarrousel} />
          </Center>
        </Animated.View>

        <GestureDetector gesture={onPanUp}>
          <View>
            <Animated.View
              style={[
                coffeeFilterContainerAnimatedStyles,
                {
                  paddingHorizontal: 32,
                  paddingTop: 16,
                  paddingBottom: 12,
                },
              ]}
            >
              <Text
                fontFamily={THEME.fontFamily.Baloo2.BOLD}
                fontSize={THEME.fontSize.TITLE.SM}
                color={THEME.colors.GRAY300}
              >
                Nossos cafés
              </Text>

              <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
                {dataCoffee.map((item) => (
                  <CategoryButtonTag
                    key={item.title}
                    text={item.title}
                    isActive={item.title === selectedCategory}
                    onPress={() => handleScrollToSection(item.title)}
                  />
                ))}
              </View>
            </Animated.View>

            <SectionList
              ref={sectionListRef}
              sections={listSection}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <CoffeeCardHorizontal
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  onPress={() => handleGoToDetails(item.id)}
                />
              )}
              contentContainerStyle={{
                paddingHorizontal: 32,
                alignSelf: 'center',
                marginBottom: 38,
                marginTop: -32,
                paddingBottom: 488,
              }}
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  color={THEME.colors.GRAY400}
                  fontFamily={THEME.fontFamily.Baloo2.BOLD}
                  fontSize={THEME.fontSize.TITLE.XS}
                  marginTop={12}
                >
                  {title}
                </Text>
              )}
            />
          </View>
        </GestureDetector>
      </Animated.View>
    </VStack>
  )
}
