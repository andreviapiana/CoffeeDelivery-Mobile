import { VStack, HStack, Text, Image, IconButton, Icon, Box } from 'native-base'
import { THEME } from '@theme'

import { QuantitySelector } from '@components/QuantitySelector'

import { Feather } from '@expo/vector-icons'
import coffeeImg from '../../../../assets/coffeeTradicional1.png'

type CartCardProps = {
  onPress: () => void
}

export function CartCard({ onPress }: CartCardProps) {
  return (
    <VStack
      paddingX={8}
      paddingY={4}
      backgroundColor={THEME.colors.WHITE}
      borderBottomWidth={'1px'}
      borderBottomColor={THEME.colors.GRAY500}
    >
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <Image
          source={coffeeImg}
          alt="Foto do copo de café"
          resizeMode="contain"
          width={16}
          height={16}
        />

        <VStack>
          <HStack justifyContent={'space-between'} flexShrink={1} width={227}>
            <Text
              fontFamily={THEME.fontFamily.Roboto.REGULAR}
              fontSize={THEME.fontSize.TEXT.MD}
              color={THEME.colors.GRAY100}
            >
              Irlandês
            </Text>
            <Text
              fontFamily={THEME.fontFamily.Baloo2.BOLD}
              fontSize={THEME.fontSize.TEXT.MD}
              color={THEME.colors.GRAY200}
            >
              R$ 9,90
            </Text>
          </HStack>
          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.SM}
            color={THEME.colors.GRAY400}
          >
            227ml
          </Text>

          <HStack alignItems={'center'} marginTop={2} space={2}>
            <Box
              borderWidth={1}
              borderColor={THEME.colors.GRAY600}
              borderRadius={'md'}
              height={36}
              width={100}
              justifyContent={'center'}
            >
              <QuantitySelector />
            </Box>

            <IconButton
              rounded="md"
              padding={2}
              height={36}
              variant={'subtle'}
              colorScheme={'gray'}
              icon={
                <Icon
                  as={Feather}
                  name="trash"
                  color={THEME.colors.PURPLE}
                  size="md"
                />
              }
              onPress={onPress}
            />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}
