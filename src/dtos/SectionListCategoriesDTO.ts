import { CategoryDTO } from './CategoriesDTO'
import { CoffeesDTO } from './CoffeesDTO'

export interface SectionListCategories {
  title: CategoryDTO
  data: CoffeesDTO[]
}
