import { FlatList, View } from 'react-native'
import { CoffeeCard } from '@components/CoffeeCard'

import { dataCoffee } from '@storage/coffeesData'

type CarouselProps = {
  onPress: () => void
}

export function Carousel({ onPress }: CarouselProps) {
  return (
    <FlatList
      data={dataCoffee}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <CoffeeCard
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          image={item.image}
          onPress={onPress}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
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
