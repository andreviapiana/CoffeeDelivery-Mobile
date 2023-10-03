import { dataCoffee } from '@storage/coffeesData'

type Props = {
  search: string
}

export function getAllCoffees({ search }: Props) {
  // Armazenando os resultados //
  const searchResults = []

  // Buscando os cafés //
  for (const section of dataCoffee) {
    const matchingItems = section.data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )

    if (matchingItems.length > 0) {
      searchResults.push({
        title: section.title,
        data: matchingItems,
      })
    }
  }

  // Retornando o resultado //
  return searchResults
}
