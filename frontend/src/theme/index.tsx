import { SxProps, createTheme } from '@mui/material/styles'
import { PALETTE } from './themeConstant'
declare module '@mui/material/styles' {
  interface TypeText {
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
  }

  interface Palette {
    gamma: {
      SUCCESS_100: string
      SUCCESS_500: string
      WARNING_100: string
      WARNING_300: string
      ERROR_100: string
      ERROR_300: string
      GREY_50: string
      GREY_100: string
      GREY_300: string
      GREY_500: string
      GREY_700: string
      GREY_WHITE: string
    }
  }

  interface PaletteOptions {
    gamma: {
      SUCCESS_100: string
      SUCCESS_500: string
      WARNING_100: string
      WARNING_300: string
      ERROR_100: string
      ERROR_300: string
      GREY_50: string
      GREY_100: string
      GREY_300: string
      GREY_500: string
      GREY_700: string
      GREY_WHITE: string
    }
  }

  interface PaletteColor {
    '100': string
    '300': string
    '500': string
    '700': string
    '900': string
  }

  interface TypographyVariants {
    heading4: SxProps
    heading6: SxProps
    subtitle1: SxProps
    subtitle2: SxProps
    body1: SxProps
    body2: SxProps
    caption1: SxProps
    caption2: SxProps
    overline: SxProps
  }

  interface TypographyVariantsOptions {
    heading4: SxProps
    heading6: SxProps
    subtitle1: SxProps
    subtitle2: SxProps
    body1: SxProps
    body2: SxProps
    caption1: SxProps
    caption2: SxProps
    overline: SxProps
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading4: true
    heading6: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    caption1: true
    caption2: true
    overline: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.PRIMARY_500,
      100: PALETTE.PRIMARY_100,
      300: PALETTE.PRIMARY_300,
      500: PALETTE.PRIMARY_500,
      700: PALETTE.PRIMARY_700,
      900: PALETTE.PRIMARY_900,
    },
    gamma: {
      SUCCESS_100: PALETTE.GAMMA_SUCCESS_100,
      SUCCESS_500: PALETTE.GAMMA_SUCCESS_500,
      WARNING_100: PALETTE.GAMMA_WARNING_100,
      WARNING_300: PALETTE.GAMMA_WARNING_300,
      ERROR_100: PALETTE.GAMMA_ERROR_100,
      ERROR_300: PALETTE.GAMMA_ERROR_300,
      GREY_50: PALETTE.GAMMA_GREY_50,
      GREY_100: PALETTE.GAMMA_GREY_100,
      GREY_300: PALETTE.GAMMA_GREY_300,
      GREY_500: PALETTE.GAMMA_GREY_500,
      GREY_700: PALETTE.GAMMA_GREY_700,
      GREY_WHITE: PALETTE.GAMMA_GREY_WHITE,
    },
    text: {
      lowEmphasis: PALETTE.TEXT_LOW_EMPHASIS,
      mediumEmphasis: PALETTE.TEXT_MEDIUM_EMPHASIS,
      highEmphasis: PALETTE.TEXT_HIGH_EMPHASIS,
    },
  },

  typography: {
    fontFamily: ['Graphik'].join(','),
    heading4: {
      fontSize: '40px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '54px',
      textTransform: 'none',
      letterSpacing: '-.4px',
    },
    heading6: {
      fontSize: '24px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '34px',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '28px',
      textTransform: 'none',
      letterSpacing: '.1px',
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '28px',
      textTransform: 'none',
      letterSpacing: '.1px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '22px',
      letterSpacing: '.16px',
      textTransform: 'none',
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '22px',
      letterSpacing: '.16px',
      textTransform: 'none',
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '42px',
      letterSpacing: '.14px',
      textTransform: 'none',
    },
    caption1: {
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '16px',
      letterSpacing: '.14px',
      textTransform: 'none',
    },
    caption2: {
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '16px',
      letterSpacing: '.14px',
      textTransform: 'none',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '14px',
      letterSpacing: '.06px',
      textTransform: 'none',
    },
  },
  spacing: 4,
})

export default theme
