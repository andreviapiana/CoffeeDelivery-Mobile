import { Center, HStack, Text, VStack } from 'native-base'
import { THEME } from '@theme'

import { HomeHeader } from '@components/HomeHeader'
import { Search } from '@components/Search'
import { CoffeeCard } from '@components/CoffeeCard'

import CoffeGrainSvg from '../../assets/coffee_grain.svg'

export function Home() {
  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <VStack height={386} pt={44} backgroundColor={THEME.colors.GRAY100}>
        <HomeHeader />

        <Search />

        <HStack marginRight={1} justifyContent={'flex-end'} marginTop={-5}>
          <CoffeGrainSvg />
        </HStack>
      </VStack>

      <Center marginTop={-82.5}>
        <CoffeeCard />
      </Center>

      <Text color={THEME.colors.WHITE}>Home</Text>
    </VStack>
  )
}
