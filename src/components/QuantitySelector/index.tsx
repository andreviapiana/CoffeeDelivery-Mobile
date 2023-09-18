import { HStack, Icon, IconButton, Text } from 'native-base'
import { useState } from 'react'

import { THEME } from '@theme'
import { Feather } from '@expo/vector-icons'

export function QuantitySelector() {
  // Quantidade de Itens a adicionar //
  const [quantity, setQuantity] = useState(1)

  // Função de Quantidade de Itens //
  function handleQtdCoffee(val: 1 | -1) {
    const newQtd = quantity + val
    if (newQtd >= 1) {
      setQuantity(newQtd)
    }
  }

  return (
    <HStack alignItems={'center'} borderRadius={'md'}>
      <HStack alignItems={'center'} height={9} space={2}>
        <IconButton
          rounded="sm"
          padding={2}
          icon={
            <Icon
              as={Feather}
              name="minus"
              color={quantity <= 1 ? THEME.colors.GRAY500 : THEME.colors.PURPLE}
              size={5}
            />
          }
          onPress={() => handleQtdCoffee(-1)}
          disabled={quantity <= 1}
        />

        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.MD}
          color={THEME.colors.GRAY100}
        >
          {quantity}
        </Text>

        <IconButton
          rounded="sm"
          padding={2}
          icon={
            <Icon
              as={Feather}
              name="plus"
              color={quantity >= 9 ? THEME.colors.GRAY500 : THEME.colors.PURPLE}
              size={5}
            />
          }
          onPress={() => handleQtdCoffee(+1)}
          disabled={quantity >= 9}
        />
      </HStack>
    </HStack>
  )
}
