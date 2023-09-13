import { Flex, Input, Spinner, Text, VStack } from 'native-base'
import { THEME } from '@theme'

import { useState } from 'react'

import { Feather } from '@expo/vector-icons'

export function Search() {
  // Loading //
  const [isSearching, setIsSearching] = useState(false)

  // Armazenando o Status de cor da Lupa baseado no Foco no Input (mudar a cor da lupa) //
  const [isOnFocus, setIsOnFocus] = useState(false)

  // Armazenando o Search //
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch da Busca //
  async function handleSearch() {
    try {
      setIsSearching(true)
      console.log(`Buscou por ${searchTerm}`)
    } catch (error) {
      console.log(error)
    } finally {
      setIsSearching(false)
    }
  }

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
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
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
                    ? searchTerm.length > 0
                      ? THEME.colors.YELLOW_DARK
                      : THEME.colors.YELLOW
                    : THEME.colors.GRAY400
                }
                onPress={handleSearch}
              />
            )}
          </Flex>
        }
      />
    </VStack>
  )
}
