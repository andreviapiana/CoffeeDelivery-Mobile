import { HStack, Image, Text, VStack, View } from 'native-base'

import { THEME } from '@theme'

import tradicionalImg from '../../assets/coffeeTradicional1.png'

export function CoffeeCardHorizontal() {
  return (
    <HStack
      height={120}
      width={311}
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
        source={tradicionalImg}
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
            Nome do Café
          </Text>

          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.XS}
            color={THEME.colors.GRAY400}
          >
            Descrição do Café com 2 linhas completas para teste.
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
            9,90
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}
