import { Center, HStack, VStack } from 'native-base'
import { useState } from 'react'

import { THEME } from '@theme'

import { HomeHeader } from '@components/HomeHeader'
import { Search } from '@components/Search'
import { Carousel } from '@components/Carousel'
import { CategoryFilter } from '@components/CategoryFilter'

import CoffeGrainSvg from '../../assets/coffee_grain.svg'

import { CategoryDTO } from '@dtos/CategoriesDTO'

export function Home() {
  // State p/ salvar o botão de filtro ativo que vem lá do CategoryFilter //
  const [categorySelected, setCategorySelected] = useState<CategoryDTO | ''>('')
  console.log(categorySelected)

  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <VStack height={386} pt={44} backgroundColor={THEME.colors.GRAY100}>
        <HomeHeader />

        <Search />

        <HStack marginRight={1} justifyContent={'flex-end'} marginTop={-5}>
          <CoffeGrainSvg />
        </HStack>
      </VStack>

      <Center marginTop={-112}>
        <Carousel />
      </Center>

      <CategoryFilter setCategorySelected={setCategorySelected} />
    </VStack>
  )
}
