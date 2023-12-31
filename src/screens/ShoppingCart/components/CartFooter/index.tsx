import { HStack, VStack, Text } from 'native-base'
import { THEME } from '@theme'

import { Button } from '@components/Button'

type CartFooterProps = {
  onPress: () => void
  totalValue: number
}

export function CartFooter({ onPress, totalValue }: CartFooterProps) {
  return (
    <VStack
      paddingX={8}
      paddingTop={7}
      paddingBottom={10}
      backgroundColor={THEME.colors.WHITE}
      space={5}
      height={160}
    >
      <HStack justifyContent={'space-between'}>
        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.MD}
          color={THEME.colors.GRAY200}
        >
          Valor
        </Text>
        <Text
          fontFamily={THEME.fontFamily.Baloo2.BOLD}
          fontSize={THEME.fontSize.TEXT.MD}
          color={THEME.colors.GRAY200}
        >
          R${' '}
          {new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
          }).format(totalValue / 100)}
        </Text>
      </HStack>

      <Button
        flex={1}
        title={'CONFIRMAR PEDIDO'}
        variant={'primary'}
        onPress={onPress}
      />
    </VStack>
  )
}
