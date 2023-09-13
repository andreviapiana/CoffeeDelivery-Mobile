import { ImageSourcePropType } from 'react-native'
import { Category } from './CategoriesDTO'

export type CoffeesDTO = {
  name: string
  description: string
  price: number
  category: Category
  image: ImageSourcePropType
}
