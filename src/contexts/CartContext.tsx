/* eslint-disable no-useless-catch */
import { createContext, useState, ReactNode, useEffect } from 'react'

import {
  StorageCartProps,
  storageProductSave,
  storageProductRemove,
  storageProductGetAll,
  storageClearShopCart,
  storageProductIncrease,
  storageProductDecrease,
} from '../storage/storageCart'

export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>
  removeProductCart: (productId: string) => Promise<void>
  increaseCartQuantity: (removeId: string) => Promise<void>
  decreaseCartQuantity: (removeId: string) => Promise<void>
  clearShopCart: () => Promise<void>
  cart: StorageCartProps[]
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([])

  async function addProductCart(newProduct: StorageCartProps) {
    try {
      const storageResponse = await storageProductSave(newProduct)
      setCart(storageResponse)
    } catch (error) {
      throw error
    }
  }

  async function removeProductCart(productId: string) {
    try {
      const response = await storageProductRemove(productId)
      setCart(response)
    } catch (error) {
      throw error
    }
  }

  async function increaseCartQuantity(uniqueId: string) {
    try {
      const response = await storageProductIncrease(uniqueId)
      setCart(response)
    } catch (error) {
      throw error
    }
  }

  async function decreaseCartQuantity(uniqueId: string) {
    try {
      const response = await storageProductDecrease(uniqueId)
      setCart(response)
    } catch (error) {
      throw error
    }
  }

  async function clearShopCart() {
    await storageClearShopCart()

    setCart([])
  }

  useEffect(() => {
    storageProductGetAll()
      .then((products) => setCart(products))
      .catch((error) => console.log(error))
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        clearShopCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
