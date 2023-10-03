import { PressableProps, Text, Pressable } from 'react-native'

import { useState } from 'react'
import { THEME } from '@theme'
import { styles } from './styles'

type Props = PressableProps & {
  text: string
}

export function CategoryButtonTag({ text, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.container,
        {
          backgroundColor: isPressed
            ? THEME.colors.PURPLE
            : THEME.colors.GRAY900,
          borderColor: THEME.colors.PURPLE,
          borderWidth: 1,
        },
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: isPressed ? THEME.colors.WHITE : THEME.colors.PURPLE_DARK,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}
