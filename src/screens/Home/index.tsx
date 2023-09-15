import { Center, HStack, ScrollView, VStack } from 'native-base'
import { useEffect, useState } from 'react'

import { THEME } from '@theme'

import { Header } from '@components/Header'
import { Search } from '@components/Search'
import { Carousel } from '@components/Carousel'
import { CategoryFilter } from '@components/CategoryFilter'
import { CoffeeMenu } from '@components/CoffeeMenu'

import CoffeGrainSvg from '../../assets/coffee_grain.svg'

import { CategoryDTO } from '@dtos/CategoriesDTO'
import { SectionListCategories } from '@dtos/SectionListCategoriesDTO'

import { getAllCoffeesByCategory } from '@services/getAllCoffeesByCategory'

export function Home() {
  // State p/ salvar o botão de filtro ativo que vem lá do CategoryFilter //
  const [categorySelected, setCategorySelected] = useState<CategoryDTO | ''>('')

  const search = ''

  // State p/ Salvar os Cafés com Categoria separada p/ usar na SectionList //
  const [listSection, setListSection] = useState<SectionListCategories[]>([])

  // Função de Fetch dos Cafés com Categoria separada //
  function getLoadingData() {
    const coffeeList = getAllCoffeesByCategory({
      category: categorySelected,
      search,
    })
    setListSection(coffeeList)
  }

  // Disparando a função de Fetch //
  useEffect(() => {
    getLoadingData()
  }, [search, categorySelected])

  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <VStack height={386} pt={44} backgroundColor={THEME.colors.GRAY100}>
        <Header variant={'Location'} />

        <Search />

        <HStack marginRight={1} justifyContent={'flex-end'} marginTop={-5}>
          <CoffeGrainSvg />
        </HStack>
      </VStack>

      <Center marginTop={-112}>
        <Carousel />
      </Center>

      <CategoryFilter setCategorySelected={setCategorySelected} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <CoffeeMenu coffees={listSection} />
      </ScrollView>
    </VStack>
  )
}
