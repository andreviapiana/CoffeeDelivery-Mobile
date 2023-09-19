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
  // Loading //
  const [isSearching, setIsSearching] = useState(false)

  // Armazenando o Search //
  const [search, setSearch] = useState('')

  // State p/ salvar o botão de filtro ativo que vem lá do CategoryFilter //
  const [categorySelected, setCategorySelected] = useState<CategoryDTO | ''>('')

  // State p/ Salvar os Cafés com Categoria separada p/ usar na SectionList //
  const [listSection, setListSection] = useState<SectionListCategories[]>([])

  // Função de Fetch dos Cafés pela categoria ou pelo Search //
  function getLoadingData() {
    setIsSearching(true)
    const coffeeList = getAllCoffeesByCategory({
      category: categorySelected,
      search,
    })
    setSearch('')
    setListSection(coffeeList)
    setIsSearching(false)
  }

  // Disparando a função de Fetch monitorando o Filter //
  useEffect(() => {
    getLoadingData()
  }, [categorySelected])

  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <VStack height={386} pt={44} backgroundColor={THEME.colors.GRAY100}>
        <Header variant={'Location'} />

        <Search
          search={search}
          setSearch={setSearch}
          isSearching={isSearching}
          onPress={getLoadingData}
        />

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
