import { Text, VStack } from 'native-base'
import { THEME } from '@theme'

import { HomeHeader } from '@components/HomeHeader'

export function Home() {
  return (
    <VStack flex={1} pt={44} backgroundColor={THEME.colors.GRAY100}>
      <HomeHeader />
      <Text color={THEME.colors.WHITE}>Home</Text>
    </VStack>
  )
}
