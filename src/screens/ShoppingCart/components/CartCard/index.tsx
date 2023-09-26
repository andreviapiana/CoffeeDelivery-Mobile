import { VStack, HStack, Text, Image, IconButton, Icon, Box } from 'native-base'
import { THEME } from '@theme'

import { QuantitySelector } from '@components/QuantitySelector'

import { Feather } from '@expo/vector-icons'

import { StorageCartProps } from '@storage/storageCart'
import { useCart } from '@hooks/useCart'

type CartCardProps = {
  onRemove: () => void
  data: StorageCartProps
}

export function CartCard({ data, onRemove }: CartCardProps) {
  // useCart //
  const { increaseCartQuantity, decreaseCartQuantity } = useCart()

  // Função p/ Alterar a Quantidade de Itens no Carrinho e já salvar no Async //
  async function handleChangeQuantity(val: 1 | -1) {
    if (val === 1) {
      await increaseCartQuantity(data.uniqueId)
    } else {
      await decreaseCartQuantity(data.uniqueId)
    }
  }

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
          source={data.image}
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
              {data.name}
            </Text>
            <Text
              fontFamily={THEME.fontFamily.Baloo2.BOLD}
              fontSize={THEME.fontSize.TEXT.MD}
              color={THEME.colors.GRAY200}
            >
              R${' '}
              {new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format((data.price / 100) * data.quantity)}
            </Text>
          </HStack>
          <Text
            fontFamily={THEME.fontFamily.Roboto.REGULAR}
            fontSize={THEME.fontSize.TEXT.SM}
            color={THEME.colors.GRAY400}
          >
            {data.size}
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
<QuantitySelector
  onChangeQuantity={handleChangeQuantity}
  counterValue={data.quantity}
/>
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
              onPress={onRemove}
            />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}
