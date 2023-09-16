type HomeRouteProps = {
  product?: {
    name: string
    image: ImageSourcePropType
    ml: string
    qtd: number
  }
}

type DetailsRoutes = {
  name: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: HomeRouteProps
      details: DetailsRoutes
      shopping: undefined
      finish: undefined
    }
  }
}
