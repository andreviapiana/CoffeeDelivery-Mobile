import { FlatList, View, ViewToken } from 'react-native'
import { useRef, useState } from 'react'

import { CoffeeCard } from '@components/CoffeeCard'

import { useNavigation } from '@react-navigation/native'
import { CoffeesDTO } from '@dtos/CoffeesDTO'

type CarouselProps = {
  coffees: CoffeesDTO[]
}

export function Carousel({ coffees }: CarouselProps) {
  // Navegação p/ a página Details //
  const navigation = useNavigation()

  function handleGoToDetails(productId: string) {
    navigation.navigate('details', { productId })
  }

  // Animações do Carousel //
  const [visibleIndex, setVisibleIndex] = useState<number | null>(0)

  /* Verificar o item que está sendo visível na flatlist */
  const onViewableItemsChanged = (info: {
    viewableItems: ViewToken[]
    changed: ViewToken[]
  }) => {
    if (info.viewableItems.length > 0) {
      const visibleItem = info.viewableItems[0]
      if (visibleItem && visibleItem.index !== undefined) {
        setVisibleIndex(visibleItem.index)
      }
    }
  }
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 }
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  return (
    <FlatList
      data={coffees}
      viewabilityConfig={viewabilityConfig}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item, index }) => (
        <CoffeeCard
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          image={item.image}
          onPress={() => handleGoToDetails(item.id)}
          index={index}
          currentIndex={visibleIndex}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToAlignment="center"
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 330,
        marginLeft: 32,
        paddingRight: 64,
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10, width: 10 }} />}
    />
  )
}
