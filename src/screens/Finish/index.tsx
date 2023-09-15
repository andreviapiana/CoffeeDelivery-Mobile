import { Center, Text, VStack } from 'native-base'

import { THEME } from '@theme'

import { Button } from '@components/Button'

import ScooterSvg from '../../assets/Scooter.svg'

export function Finish() {
  return (
    <Center flex={1} backgroundColor={THEME.colors.WHITE} paddingX={58}>
      <ScooterSvg />
      <VStack alignItems={'center'} marginTop={10} marginBottom={16} space={2}>
        <Text
          fontFamily={THEME.fontFamily.Baloo2.BOLD}
          fontSize={THEME.fontSize.TITLE.LG}
          color={THEME.colors.YELLOW_DARK}
        >
          Uhu! Pedido confirmado
        </Text>

        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.SM}
          color={THEME.colors.GRAY200}
          textAlign={'center'}
        >
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </VStack>

      <Button title={'IR PARA A HOME'} />
    </Center>
  )
}
