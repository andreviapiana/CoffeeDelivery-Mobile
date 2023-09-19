import { ImageSourcePropType } from 'react-native'
import { CategoryDTO } from './CategoriesDTO'

export type CoffeesDTO = {
  id: number
  name: string
  description: string
  price: number
  category: CategoryDTO
  image: ImageSourcePropType
}
