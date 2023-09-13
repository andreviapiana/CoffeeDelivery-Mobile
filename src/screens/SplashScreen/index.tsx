import { styles } from './styles'
import { View } from 'react-native'

import Animated, {
  Keyframe,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import Logo from '../../assets/Logo.svg'

export function SplashScreen() {
  const widthAnimated = useSharedValue(44)

  const enteringKeyframe = new Keyframe({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const styledAnimated = useAnimatedStyle(() => {
    return {
      width: widthAnimated.value,
    }
  })

  function animatedWidth() {
    return (widthAnimated.value = withTiming(156, { duration: 1000 }))
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[{ overflow: 'hidden' }, styledAnimated]}
        entering={enteringKeyframe.duration(700).withCallback((finish) => {
          'worklet'
          if (finish) {
            runOnJS(animatedWidth)()
          }
        })}
      >
        <Logo />
      </Animated.View>
    </View>
  )
}
