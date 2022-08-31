import { styled } from '../../styles/theme/default'

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 60,
})

export const StudyWrapper = styled('div', {
  marginBottom: 40,

  '& h1': {
    fontSize: '2rem',
    color: '$primary',
    fontWeight: 'bold',
  },

  '@tabletPortraitUp': {
    '& h1': {
      fontSize: '3rem',
    },
  },

  '@desktopUp': {
    '& h1': {
      fontSize: '4.5rem',
    },
  },
})

export const CardWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
  marginBottom: 40,
})

export const Link = styled('a', {
  color: '$tertiary',
})
