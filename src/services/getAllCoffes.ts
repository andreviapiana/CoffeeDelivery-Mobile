import { CoffeesDTO } from '@dtos/CoffeesDTO'
import { CategoryDTO } from '@dtos/CategoriesDTO'

import { dataCoffee } from '@storage/coffeesData'

type Props = {
  category: CategoryDTO | ''
  search: string
}

export function getAllCoffees({ category, search }: Props): CoffeesDTO[] {
  const data =
    search === ''
      ? dataCoffee
      : dataCoffee.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )

  if (category !== '') {
    return data.filter((item) => item.category === category)
  } else {
    return data
  }
}
