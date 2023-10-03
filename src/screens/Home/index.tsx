import {
  Center,
  HStack,
  StatusBar,
  VStack,
  Text,
  View,
  SectionList,
  ScrollView,
} from 'native-base'
import { useEffect, useState } from 'react'

import { THEME } from '@theme'

import { Header } from '@components/Header'
import { Search } from '@components/Search'
import { Carousel } from '@components/Carousel'
import { CoffeeMenu } from '@components/CoffeeMenu'
import { CategoryButtonTag } from './components/CategoryButtonTag'

import CoffeGrainSvg from '../../assets/coffee_grain.svg'

import { CategoryDTO } from '@dtos/CategoriesDTO'
import { CoffeeSection } from '@storage/coffeesData'

import { getAllCoffees } from '@services/getAllCoffes'

import { CoffeesDTO } from '@dtos/CoffeesDTO'
import { getThreeRandomCoffeesInCarousel } from '@services/getThreeRandomCoffeesInCarousel'

import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
  SlideInRight,
  SlideInUp,
} from 'react-native-reanimated'

export function Home() {
  // Loading //
  const [isSearching, setIsSearching] = useState(false)

  // Armazenando o Search //
  const [search, setSearch] = useState('')

  // State p/ Salvar os Cafés com Categoria separada p/ usar na SectionList //
  const [listSection, setListSection] = useState<CoffeeSection[]>([])

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

  // Captura do valor do scrollY da ScrollView //
  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      // Setagem do ScrollY //
      scrollY.value = event.contentOffset.y
      // Atualização da cor da StatusBar ao chegar em 120px //
      if (event.contentOffset.y >= 120 && !isUpdateColorStatusBar) {
        runOnJS(setIsUpdateColorStatusBar)(true)
      } else if (event.contentOffset.y < 120 && isUpdateColorStatusBar) {
        runOnJS(setIsUpdateColorStatusBar)(false)
      }
    },
  })

  // Animação do bloco do Header (mudança de cor e opacidade) //
  const headerStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 320, 340],
        [1, 0.5, 1],
        Extrapolate.CLAMP,
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [170, 320],
        [THEME.colors.GRAY100, THEME.colors.WHITE],
      ),
    }
  })

  // Animação do bloco do Search (mudança de opacidade do fundo) //
  const introStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 320, 380], [1, 0.5, 0]),
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
            headerStyles,
            {
              paddingTop: 44,
            },
          ]}
        >
          <Header variant={'Location'} scrollValue={scrollY} />
        </Animated.View>

        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          stickyHeaderIndices={[2]}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          <Animated.View
            style={[
              introStyles,
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

          <View
            padding={8}
            paddingTop={4}
            paddingBottom={3}
            backgroundColor={THEME.colors.WHITE}
          >
            <Text
              fontFamily={THEME.fontFamily.Baloo2.BOLD}
              fontSize={THEME.fontSize.TITLE.SM}
              color={THEME.colors.GRAY300}
            >
              Nossos cafés
            </Text>

            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}>
              <CategoryButtonTag
                text="Tradicionais"
                /* onPress={() => handleScrollTo(0)} */
              />
              <CategoryButtonTag
                text="Doces"
                /* onPress={() => handleScrollTo(1)} */
              />
              <CategoryButtonTag
                text="Especiais"
                /* onPress={() => handleScrollTo(2)} */
              />
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          >
            <CoffeeMenu coffees={listSection} />
          </ScrollView>
        </Animated.ScrollView>
      </Animated.View>
    </VStack>
  )
}
