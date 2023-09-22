import { ImageSourcePropType } from 'react-native'
import { CategoryDTO } from './CategoriesDTO'

export type CoffeesDTO = {
  id: string
  name: string
  description: string
  price: number
  category: CategoryDTO
  image: ImageSourcePropType
}
