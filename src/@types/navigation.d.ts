type HomeRouteProps = {
  product?: {
    name: string
    image: ImageSourcePropType
    ml: string
    qtd: number
  }
}

type DetailsRoutes = {
  productId: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: HomeRouteProps
      details: DetailsRoutes
      cart: undefined
      finish: undefined
    }
  }
}
