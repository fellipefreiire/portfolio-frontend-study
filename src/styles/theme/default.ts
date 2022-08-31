import { createStitches } from '@stitches/react'

export const { styled, css, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: '#00fea1',
      secondary: '#BA99F6',
      tertiary: '#FFAC00',
      background800: '#242424',
      background900: '#121212',
      text: '#FFFFFF',

      javascript: '#f9f871',
      react: '#00e3ed',
      'react-native': '#667DFF',
      flutter: '#61C9F9',
      dart: '#55DDCA',
    },
  },
  media: {
    phoneOnly: '(max-width: 599px)',
    tabletPortraitUp: '(min-width: 600px)',
    tabletLandscapeUp: '(min-width: 900px)',
    desktopUp: '(min-width: 1200px)',
    bigDesktopUp: '(min-width: 1800px)',
  },
})

export const lightTheme = createTheme('light', {
  colors: {
    primary: '#FFFFFF',
    secondary: '#BA99F6',
    tertiary: '#FFAC00',
    background900: '#121212',
    background800: '#242424',
    text: '#FFFFFF',
  },
})
