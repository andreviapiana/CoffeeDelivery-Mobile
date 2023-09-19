import { StatusBar } from 'native-base'
import { Dimensions, View } from 'react-native'

import { useEffect } from 'react'

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Canvas, Circle, BlurMask } from '@shopify/react-native-skia'

import { THEME } from '@theme'

import LogoCopo from '@assets/LogoCopo.svg'
import LogoTexto from '@assets/LogoTexto.svg'

// Captura das dimensões da tela do celular //
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height

export function SplashScreen() {
  // State p/ Translate do Copo //
  const translate1 = useSharedValue(SCREEN_WIDTH / 6.62)
  // State p/ Translate do Texto //
  const translate2 = useSharedValue(SCREEN_WIDTH / 7)
  // State p/ Opacidade do Copo //
  const opacity1 = useSharedValue(0)
  // State p/ Opacidade do Texto //
  const opacity2 = useSharedValue(0)
  // State p/ Escala //
  const scale = useSharedValue(1)

  // Animação do Copo //
  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate1.value }],
      opacity: opacity1.value,
    }
  })

  // Animação do Nome do App //
  const animatedContainerStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate2.value }],
      opacity: opacity2.value,
    }
  })

  // Animação da Escala //
  const animatedContainerStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  // Variação de Opacidade //
  function handleOpacity() {
    opacity1.value = withTiming(1, { easing: Easing.ease, duration: 500 })
  }

  // Variação de escala //
  function handleScale() {
    scale.value = withTiming(10, { easing: Easing.ease, duration: 500 })
  }

  // Translate do Copo //
  function handleChangeTranslate1() {
    translate1.value = withTiming(0, { easing: Easing.ease, duration: 500 })
  }

  // Translate do Nome //
  function handleChangeTranslate2() {
    translate2.value = withTiming(0, { easing: Easing.ease, duration: 500 })
    opacity2.value = withTiming(1, { easing: Easing.ease, duration: 500 })
  }

  // Disparo dos Translates //
  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate1()
      handleChangeTranslate2()
    }, 2000)
  }, [])

  // Disparo da Opacidade inicial //
  useEffect(() => {
    handleOpacity()
    handleScale()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: THEME.colors.PURPLE_DARK,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Animated.View
        style={[
          animatedContainerStyle3,
          {
            backgroundColor: 'rgba(1, 1, 1, 0.5)',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            position: 'absolute',
          },
        ]}
      >
        <Canvas
          style={{
            flex: 1,
            top: SCREEN_HEIGHT / 2.25,
            left: SCREEN_WIDTH / 2.64,
          }}
        >
          <Circle r={50} cx={50} cy={50} color={THEME.colors.PURPLE}>
            <BlurMask blur={0} style={'inner'} />
          </Circle>
        </Canvas>
      </Animated.View>

      <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
        <Animated.View style={animatedContainerStyle}>
          <LogoCopo />
        </Animated.View>
        <Animated.View style={animatedContainerStyle2}>
          <LogoTexto />
        </Animated.View>
      </View>
    </View>
  )
}
