import { Box, HStack, Image, Text, VStack, View } from 'native-base'
import { THEME } from '@theme'

import { ImageSourcePropType } from 'react-native'

type CoffeeCardProps = {
  name: string
  description: string
  price: number
  category: string
  image: ImageSourcePropType
}

export function CoffeeCard({
  name,
  description,
  price,
  category,
  image,
}: CoffeeCardProps) {
  return (
    <VStack
      height={262}
      width={208}
      paddingX={4}
      paddingBottom={5}
      paddingTop={24}
      backgroundColor={THEME.colors.GRAY800}
      borderRadius={6}
      borderTopRightRadius={36}
      borderBottomLeftRadius={36}
      borderColor={THEME.colors.GRAY700}
      borderWidth={1}
      alignItems={'center'}
    >
      <Image
        source={image}
        width={120}
        height={120}
        alt="Foto do copo de café"
        resizeMode="contain"
        position="absolute"
        top={-32}
      />
      <VStack>
        <Box
          paddingY={1}
          paddingX={2}
          marginBottom={14}
          backgroundColor={THEME.colors.PURPLE_LIGHT}
          borderRadius={100}
          alignSelf={'center'}
          width={'full'}
        >
          <Text
            fontFamily={THEME.fontFamily.Roboto.BOLD}
            fontSize={THEME.fontSize.TEXT.TAG}
            color={THEME.colors.PURPLE}
          >
            {category}
          </Text>
        </Box>

        <View height={66}>
          <Text
            textAlign={'center'}
            fontFamily={THEME.fontFamily.Baloo2.BOLD}
            fontSize={THEME.fontSize.TITLE.LG}
            lineHeight={'md'}
            height={26}
          >
            {name}
          </Text>

          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.XS}
            color={THEME.colors.GRAY400}
            textAlign={'center'}
          >
            {description}
          </Text>
        </View>

        <HStack
          alignItems={'center'}
          space={1}
          justifyContent={'center'}
          marginTop={14}
          height={31}
        >
          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.SM}
            color={THEME.colors.YELLOW_DARK}
          >
            R$
          </Text>
          <Text
            fontFamily={THEME.fontFamily.Baloo2.BOLD}
            fontSize={THEME.fontSize.TITLE.LG}
            color={THEME.colors.YELLOW_DARK}
          >
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(price / 100)}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
