import { CategoryDTO } from '@dtos/CategoriesDTO'
import { SectionListCategories } from '@dtos/SectionListCategoriesDTO'

import { getAllCoffees } from './getAllCoffes'

type Props = {
  category: CategoryDTO | ''
  search: string
}

export function getAllCoffeesByCategory(props: Props): SectionListCategories[] {
  const coffees = getAllCoffees(props)

  const list: SectionListCategories[] = []
  coffees.forEach((coffee) => {
    const findIndex = list.findIndex((item) => item.title === coffee.category)
    if (findIndex === -1) {
      const newObj: SectionListCategories = {
        title: coffee.category,
        data: [coffee],
      }
      list.push(newObj)
    } else {
      list[findIndex].data.push(coffee)
    }
  })

  return list
}
