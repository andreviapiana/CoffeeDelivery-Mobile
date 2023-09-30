import { SectionList, Text } from 'native-base'
import { THEME } from '@theme'

import { CoffeeCardHorizontal } from '@components/CoffeeCardHorizontal'
import { SectionListCategories } from '@dtos/SectionListCategoriesDTO'

import { useNavigation } from '@react-navigation/native'

type CoffeeMenuProps = {
  coffees: SectionListCategories[]
}

export function CoffeeMenu({ coffees }: CoffeeMenuProps) {
  // Navegação p/ a página Details //
  const navigation = useNavigation()

  function handleGoToDetails(productId: string) {
    navigation.navigate('details', { productId })
  }

  return (
    <SectionList
      sections={coffees}
      scrollEnabled={false}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <CoffeeCardHorizontal
          coffee={item}
          onPress={() => handleGoToDetails(item.id)}
        />
      )}
      marginBottom={38}
      marginTop={-4}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          color={THEME.colors.GRAY400}
          fontFamily={THEME.fontFamily.Baloo2.BOLD}
          fontSize={THEME.fontSize.TITLE.XS}
          marginTop={12}
        >
          {title}
        </Text>
      )}
    />
  )
}
