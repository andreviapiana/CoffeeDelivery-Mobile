import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Details } from '../screens/Details'
/* import { ShoppingCart } from '../screens/ShoppingCart' */
import { Finish } from '../screens/Finish'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      {/* <Screen name="cart" component={ShoppingCart} /> */}
      <Screen name="finish" component={Finish} />
    </Navigator>
  )
}
