import { Flex, Input, Spinner, Text, VStack } from 'native-base'
import { THEME } from '@theme'

import { useState } from 'react'

import { Feather } from '@expo/vector-icons'

type SearchProps = {
  isSearching: boolean
  setSearch: (value: string) => void
  search: string
  onPress: () => void
}

export function Search({
  isSearching,
  setSearch,
  search,
  onPress,
}: SearchProps) {
  // Armazenando o Status de cor da Lupa baseado no Foco no Input (mudar a cor da lupa) //
  const [isOnFocus, setIsOnFocus] = useState(false)

  return (
    <VStack px={8} py={5}>
      <Text
        fontFamily={THEME.fontFamily.Baloo2.BOLD}
        color={THEME.colors.WHITE}
        fontSize={THEME.fontSize.TITLE.MD}
      >
        Encontre o café perfeito para qualquer hora do dia
      </Text>
      <Input
        mt={15}
        height={42}
        placeholder="Pesquisar"
        fontFamily={THEME.fontFamily.Roboto.REGULAR}
        fontSize={THEME.fontSize.TEXT.SM}
        color={THEME.colors.GRAY700}
        backgroundColor={THEME.colors.GRAY200}
        borderColor={'transparent'}
        focusOutlineColor={'none'}
        onFocus={() => setIsOnFocus(true)}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={onPress}
        InputLeftElement={
          <Flex direction="row" align="center" ml={4}>
            {isSearching ? (
              <Spinner color={THEME.colors.GRAY400} size="sm" />
            ) : (
              <Feather
                name={'search'}
                size={20}
                color={
                  isOnFocus
                    ? search.length > 0
                      ? THEME.colors.YELLOW_DARK
                      : THEME.colors.YELLOW
                    : THEME.colors.GRAY400
                }
                onPress={onPress}
              />
            )}
          </Flex>
        }
      />
    </VStack>
  )
}
