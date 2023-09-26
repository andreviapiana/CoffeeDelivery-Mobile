import { Center, Image, Text } from 'native-base'

import { THEME } from '@theme'

import { Button } from '@components/Button'

import ScooterImg from '../../assets/scooter.png'
import { useNavigation } from '@react-navigation/native'

import { Dimensions } from 'react-native'
import { useEffect } from 'react'
import Animated, {
  Easing,
  Keyframe,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const ImageAnimated = Animated.createAnimatedComponent(Image)

const SCREEN_WIDTH = Dimensions.get('screen').width

export function Finish() {
  // Navegação p/ a página Home //
  const navigation = useNavigation()

  function handleHome() {
    navigation.navigate('home', {})
  }

  // Animação da Tela //
  const enteringKeyFrame = new Keyframe({
    0: {
      transform: [{ translateX: -SCREEN_WIDTH }],
    },
    80: {
      transform: [{ translateX: 50 }],
    },
    100: {
      transform: [{ translateX: 0 }],
    },
  })

  const translate1 = useSharedValue(50)
  const opacity = useSharedValue(0)
  const opacity2 = useSharedValue(0)

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate1.value }],
      opacity: opacity.value,
    }
  })

  const animatedContainerStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
    }
  })

  function handleChangeTranslate() {
    translate1.value = withTiming(0, {
      easing: Easing.ease,
      duration: 500,
    })
    opacity.value = withTiming(1, {
      easing: Easing.ease,
      duration: 500,
    })
  }

  function handleChangeOpacity() {
    opacity2.value = withTiming(1, {
      easing: Easing.ease,
      duration: 250,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      handleChangeTranslate()
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      handleChangeOpacity()
    }, 1500)
  }, [])

  return (
    <Center flex={1} backgroundColor={THEME.colors.WHITE} paddingX={58}>
      <ImageAnimated
        entering={enteringKeyFrame.duration(1000)}
        w="270"
        h="161"
        mb="10"
        source={ScooterImg}
        alt="Imagem de uma moto de entregas"
      />

      <Animated.View style={[animatedContainerStyle, { alignItems: 'center' }]}>
        <Text
          fontFamily={THEME.fontFamily.Baloo2.BOLD}
          fontSize={THEME.fontSize.TITLE.LG}
          color={THEME.colors.YELLOW_DARK}
        >
          Uhu! Pedido confirmado
        </Text>

        <Text
          fontFamily={THEME.fontFamily.Roboto.REGULAR}
          fontSize={THEME.fontSize.TEXT.SM}
          color={THEME.colors.GRAY200}
          textAlign={'center'}
          marginBottom={16}
        >
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>

<Animated.View
  style={[
    animatedContainerStyle2,
    {
      width: '100%',
    },
  ]}
>
  <Button title={'IR PARA A HOME'} onPress={handleHome} />
</Animated.View>
    </Center>
  )
}
