import { HStack, Image, Text, VStack, View } from 'native-base'

import { THEME } from '@theme'

import { CoffeesDTO } from '@dtos/CoffeesDTO'

type CoffeeCardHorizontalProps = {
  coffee: CoffeesDTO
}

export function CoffeeCardHorizontal({ coffee }: CoffeeCardHorizontalProps) {
  return (
    <HStack
      height={120}
      width={311}
      marginTop={8}
      paddingRight={4}
      paddingBottom={13}
      paddingTop={4}
      paddingLeft={116}
      backgroundColor={THEME.colors.GRAY800}
      borderRadius={6}
      borderTopRightRadius={36}
      borderBottomLeftRadius={36}
      borderColor={THEME.colors.GRAY700}
      borderWidth={1}
    >
      <Image
        source={coffee.image}
        alt="Foto do copo de café"
        resizeMode="contain"
        position="absolute"
        top={'-16px'}
        left={'8px'}
      />
      <VStack>
        <View height={57}>
          <Text
            fontFamily={THEME.fontFamily.Baloo2.BOLD}
            fontSize={THEME.fontSize.TITLE.SM}
            lineHeight={'md'}
            height={21}
          >
            {coffee.name}
          </Text>

          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.XS}
            color={THEME.colors.GRAY400}
          >
            {coffee.description}
          </Text>
        </View>

        <HStack alignItems={'baseline'} space={1} marginTop={2} height={26}>
          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.SM}
            color={THEME.colors.YELLOW_DARK}
          >
            R$
          </Text>
          <Text
            fontFamily={THEME.fontFamily.Baloo2.BOLD}
            fontSize={THEME.fontSize.TITLE.MD}
            color={THEME.colors.YELLOW_DARK}
          >
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(coffee.price / 100)}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}
