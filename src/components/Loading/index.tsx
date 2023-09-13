import { Center, Spinner } from 'native-base'
import { THEME } from '@theme'

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner color={THEME.colors.PURPLE} />
    </Center>
  )
}
