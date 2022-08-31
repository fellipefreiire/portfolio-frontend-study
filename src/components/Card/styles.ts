import { styled } from '../../styles/theme/default'

export const CardContainer = styled('div', {
  backgroundColor: '$background800',
  padding: 16,
  borderRadius: 10,
  flex: 1,
  cursor: 'pointer',

  '@tabletPortraitUp': {
    flex: '0 0 calc(100% / 2 - 8px)',
  },

  '@tabletLandscapeUp': {
    flex: '0 0 calc(100% / 3 - 11px)',
  },
})

export const TagsWrapper = styled('header', {
  display: 'flex',
  gap: 8,
  marginBottom: 8,
})

export const Tag = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 8px',
  borderRadius: 1000,

  '& span': {
    fontSize: '0.75rem',
    color: '$background800',
    textTransform: 'capitalize',
  },

  variants: {
    variant: {
      react: {
        backgroundColor: '#00e3ed',
      },
      javascript: {
        backgroundColor: '#f9f871',
      },
      'react-native': {
        backgroundColor: '#667DFF',
      },
      flutter: {
        backgroundColor: '#61C9F9',
      },
      dart: {
        backgroundColor: '#55DDCA',
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$text',
  gap: 12,
  marginBottom: 24,

  '& h2': {
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1.5rem',
  },

  '& span': {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1rem',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$text',
  gap: 8,

  '& span': {
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1.125rem',
  },

  '& img': {
    height: 22,
  },
})
