import { styled } from '../../../../styles/theme/default'

export const PageCardContainer = styled('div', {
  borderTop: '2px solid',
  backgroundColor: '$background800',
  padding: '32px 32px 24px',
  cursor: 'pointer',

  variants: {
    variant: {
      react: {
        borderTopColor: '$react',
      },
      javascript: {
        borderTopColor: '$javascript',
      },
      'react-native': {
        borderTopColor: '$react-native',
      },
      flutter: {
        borderTopColor: '$flutter',
      },
      dart: {
        borderTopColor: '$dart',
      },
    },
  },

  '@tabletPortraitUp': {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 calc(100% / 2 - 8px)',
  },

  '@tabletLandscapeUp': {
    flex: '0 0 calc(100% / 3 - 11px)',
  },
})

export const Type = styled('span', {
  display: 'inline-block',
  marginBottom: '0.5rem',
  letterSpacing: '0.1rem',

  variants: {
    variant: {
      react: {
        color: '$react',
      },
      javascript: {
        color: '$javascript',
      },
      'react-native': {
        color: '$react-native',
      },
      flutter: {
        color: '$flutter',
      },
      dart: {
        color: '$dart',
      },
    },
  },
})

export const Title = styled('h2', {
  display: '-webkit-box',
  overflow: 'hidden',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '$text',
  marginBottom: '0.75rem',
})

export const SubTitle = styled('span', {
  display: '-webkit-box',
  overflow: 'hidden',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 3,
  fontSize: '1rem',
  color: '$text',
  marginBottom: '0.75rem',
})

export const Image = styled('img', {
  width: '100%',
  height: '6rem',
  objectFit: 'cover',
})
