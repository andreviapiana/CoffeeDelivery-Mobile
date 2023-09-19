import { FlatList, View } from 'react-native'
import { CoffeeCard } from '@components/CoffeeCard'

import { useNavigation } from '@react-navigation/native'
import { CoffeesDTO } from '@dtos/CoffeesDTO'

type CarouselProps = {
  coffees: CoffeesDTO[]
}

export function Carousel({ coffees }: CarouselProps) {
  // Navegação p/ a página Details //
  const navigation = useNavigation()

  function handleGoToDetails(productId: number) {
    navigation.navigate('details', { productId })
  }

  return (
    <FlatList
      data={coffees}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <CoffeeCard
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          image={item.image}
          onPress={() => handleGoToDetails(item.id)}
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
