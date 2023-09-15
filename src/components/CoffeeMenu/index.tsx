import { SectionList, Text } from 'native-base'

import { CoffeeCardHorizontal } from '@components/CoffeeCardHorizontal'
import { SectionListCategories } from '@dtos/SectionListCategoriesDTO'
import { THEME } from '@theme'

type CoffeeMenuProps = {
  coffees: SectionListCategories[]
}

export function CoffeeMenu({ coffees }: CoffeeMenuProps) {
  return (
    <SectionList
      sections={coffees}
      scrollEnabled={false}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <CoffeeCardHorizontal
          coffee={item}
          /* onPress={() => handleGoDetails(item.name)} */
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
