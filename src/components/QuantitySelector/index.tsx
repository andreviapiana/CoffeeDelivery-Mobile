import { HStack, Icon, IconButton, Text } from 'native-base'

import { THEME } from '@theme'
import { Feather } from '@expo/vector-icons'

type QuantitySelectorProps = {
  counterValue: number
  onChangeQuantity: (value: 1 | -1) => void
}

export function QuantitySelector({
  counterValue,
  onChangeQuantity,
}: QuantitySelectorProps) {
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
              color={
                counterValue <= 1 ? THEME.colors.GRAY500 : THEME.colors.PURPLE
              }
              size={5}
            />
          }
          onPress={() => onChangeQuantity(-1)}
          disabled={counterValue <= 1}
        />

        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.MD}
          color={THEME.colors.GRAY100}
        >
          {counterValue}
        </Text>

        <IconButton
          rounded="sm"
          padding={2}
          icon={
            <Icon
              as={Feather}
              name="plus"
              color={
                counterValue >= 9 ? THEME.colors.GRAY500 : THEME.colors.PURPLE
              }
              size={5}
            />
          }
          onPress={() => onChangeQuantity(+1)}
          disabled={counterValue >= 9}
        />
      </HStack>
    </HStack>
  )
}
