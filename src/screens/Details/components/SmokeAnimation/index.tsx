import { useEffect, useState } from 'react'
import { View } from 'native-base'

import { Canvas, Path } from '@shopify/react-native-skia'

import { SMOKE } from './data'

export function SmokeAnimation() {
  const [pathIndex, setPathIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPathIndex((prevPathIndex) => (prevPathIndex + 1) % SMOKE.length)
    }, 270)

    return () => clearInterval(interval)
  }, [])

  return (
    <View
      zIndex={999}
      position={'absolute'}
      alignSelf={'center'}
      bottom={100}
      paddingLeft={10}
    >
      <Canvas style={{ width: 150, height: 260 }}>
        {SMOKE[pathIndex].map((smoke, index) => (
          <Path key={index} path={smoke} opacity={0.2} color="#D7D5D5" />
        ))}
      </Canvas>
    </View>
  )
}
