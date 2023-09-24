/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageSourcePropType } from 'react-native'

const CART_STORAGE = '@COFFEEDELIVERY_CART'

export type StorageCartProps = {
  id: string
  name: string
  size: string
  quantity: number
  image: ImageSourcePropType
  price: number
  removeId: string
}

export async function storageProductGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_STORAGE)
    const products: StorageCartProps[] = storage ? JSON.parse(storage) : []

    return products
  } catch (error) {
    throw error
  }
}

export async function storageProductSave(newProduct: StorageCartProps) {
  try {
    let products = await storageProductGetAll()

    const productExists = products.filter(
      (product) =>
        product.id === newProduct.id && product.size === newProduct.size,
    )

    if (productExists.length > 0) {
      products = products.map((product) => {
        if (product.id + product.size === newProduct.id + newProduct.size) {
          product.quantity =
            Number(product.quantity) + Number(newProduct.quantity)
        }

        return product
      })
    } else {
      products.push(newProduct)
    }

    const productsUpdated = JSON.stringify(products)
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated)

    return products
  } catch (error) {
    throw error
  }
}

export async function storageProductRemove(removeId: string) {
  try {
    const products = await storageProductGetAll()

    const productsUpdated = products.filter(
      (product) => product.removeId !== removeId,
    )
    await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(productsUpdated))

    return productsUpdated
  } catch (error) {
    throw error
  }
}
