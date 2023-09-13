import { Text, VStack } from 'native-base'
import { THEME } from '@theme'

import { HomeHeader } from '@components/HomeHeader'
import { Search } from '@components/Search'

export function Home() {
  return (
    <VStack flex={1} backgroundColor={THEME.colors.WHITE}>
      <VStack height={342} pt={44} backgroundColor={THEME.colors.GRAY100}>
        <HomeHeader />
        <Search />
      </VStack>
      <Text color={THEME.colors.WHITE}>Home</Text>
    </VStack>
  )
}
