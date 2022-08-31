import { styled } from '../../styles/theme/default'

export const StudyContainer = styled('div', {
  padding: '60px 0',
})

export const Content = styled('div', {
  display: 'flex',
  gap: 60,
})

export const Menu = styled('div', {
  display: 'none',

  '& h1': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    fontWeight: 700,
    color: '$text',
    marginBottom: '3rem',
  },

  '& p': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 600,
    color: '$secondary',

    '& span': {
      color: '$text',
    },
  },

  '@tabletPortraitUp': {
    display: 'block',
  },
})

export const CardWrapper = styled('div', {
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
})
