import { PressableProps, Text, Pressable } from 'react-native'

import { THEME } from '@theme'
import { styles } from './styles'

type Props = PressableProps & {
  text: string
  isActive: boolean
}

export function CategoryButtonTag({ text, isActive, ...rest }: Props) {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: isActive
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
            color: isActive ? THEME.colors.WHITE : THEME.colors.PURPLE_DARK,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}
