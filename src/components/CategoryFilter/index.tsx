import { FlatList, Text, VStack } from 'native-base'

import { ButtonTag } from '@components/ButtonTag'

import { dataCoffee } from '@storage/coffeesData'
import { CategoryDTO } from '@dtos/CategoriesDTO'
import { THEME } from '@theme'
import { useState } from 'react'

type CategoryFilterProps = {
  setCategorySelected: (category: CategoryDTO) => void
}

export function CategoryFilter({ setCategorySelected }: CategoryFilterProps) {
  // Capturando as Categorias Existentes sem repetir os nomes //
  const distinctCategories = [...new Set(dataCoffee.map((obj) => obj.category))]

  // Detectando o Botão que vai estar ativo sem ter que enviar essa info lá de Home até aqui //
  const [isActive, setIsActive] = useState('')

  async function setActiveButton(item: CategoryDTO) {
    setCategorySelected(item)
    setIsActive(item)
  }

  return (
    <VStack
      paddingX={8}
      paddingTop={4}
      paddingBottom={4}
      backgroundColor={THEME.colors.WHITE}
    >
      <Text
        fontFamily={THEME.fontFamily.Baloo2.BOLD}
        fontSize={THEME.fontSize.TITLE.SM}
        color={THEME.colors.GRAY300}
      >
        Nossos Cafés
      </Text>

      <FlatList
        data={distinctCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ButtonTag
            name={item}
            isActive={isActive === item}
            onPress={() => setActiveButton(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        marginTop={3}
      />
    </VStack>
  )
}
