import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    YELLOW_DARK: '#C47F17',
    YELLOW: '#DBAC2C',

    PURPLE_DARK: '#4B2995',
    PURPLE: '#8047F8',
    PURPLE_LIGHT: '#EBE5F9',

    GRAY100: '#272221',
    GRAY200: '#403937',
    GRAY300: '#574F4D',
    GRAY400: '#8D8686',
    GRAY500: '#D7D5D5',
    GRAY600: '#E6E5E5',
    GRAY700: '#EDEDED',
    GRAY800: '#F3F2F2',
    GRAY900: '#FAFAFA',
    WHITE: '#FFFFFF',

    RED_DARK: '#C44117',
    RED: '#E8BAAB',
    RED_LIGHT: '#F2DFD8',
  },
  fontFamily: {
    Baloo2: {
      BOLD: 'Baloo2_700Bold',
    },
    Roboto: {
      REGULAR: 'Roboto_400Regular',
      BOLD: 'Roboto_700Bold',
    },
  },
  fontSize: {
    TITLE: {
      XL: 36,
      LG: 24,
      MD: 20,
      SM: 16,
      XS: 14,
    },
    TEXT: {
      LG: 20,
      MD: 16,
      SM: 14,
      BUTTON: 14,
      XS: 12,
      TAG: 10,
    },
  },
})
