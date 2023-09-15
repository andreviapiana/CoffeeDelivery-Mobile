import { HStack, Icon, Text, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

import { THEME } from '@theme'
import { Feather } from '@expo/vector-icons'

import { Button } from '@components/Button'

type QuantitySelectorProps = {
  handleConfirm: () => void
}

export function QuantitySelector({ handleConfirm }: QuantitySelectorProps) {
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
    <HStack
      height={62}
      backgroundColor={THEME.colors.GRAY700}
      marginTop={5}
      marginBottom={10}
      alignItems={'center'}
      marginX={8}
      borderRadius={'md'}
      padding={2}
      space={4}
    >
      <HStack alignItems={'center'} space={3} padding={2}>
        <TouchableOpacity
          onPress={() => handleQtdCoffee(-1)}
          disabled={quantity <= 1}
        >
          <Icon
            as={Feather}
            name="minus"
            color={quantity <= 1 ? THEME.colors.GRAY500 : THEME.colors.PURPLE}
            size={5}
          />
        </TouchableOpacity>

        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.MD}
          color={THEME.colors.GRAY100}
        >
          {quantity}
        </Text>

        <TouchableOpacity
          onPress={() => handleQtdCoffee(+1)}
          disabled={quantity >= 9}
        >
          <Icon
            as={Feather}
            name="plus"
            color={quantity >= 9 ? THEME.colors.GRAY500 : THEME.colors.PURPLE}
            size={5}
          />
        </TouchableOpacity>
      </HStack>
      <View>
        <Button title="ADICIONAR" onPress={handleConfirm} />
      </View>
    </HStack>
  )
}
