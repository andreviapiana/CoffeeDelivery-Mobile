import { useEffect, useState } from 'react'

import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { THEME } from './src/theme'

import { Home } from '@screens/Home'
import { SplashScreen } from '@screens/SplashScreen'

import { Loading } from '@components/Loading'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

export default function App() {
  // State p/ Exibir a Splash Screen //
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  // Effect p/ Exibir a Splash por 3s //
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false)
    }, 3000)

    return () => {
      // eslint-disable-next-line no-unused-expressions
      timeout
    }
  }, [])

  if (!fontsLoaded || showSplashScreen) {
    return <SplashScreen />
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  )
}
