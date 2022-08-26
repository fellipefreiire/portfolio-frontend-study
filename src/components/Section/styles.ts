import styled from 'styled-components'

export const SectionContainer = styled.div`
  background: '#121212';
`

export const Content = styled.div`
  padding-bottom: 60px;
  display: Flex;
  flex-direction: column;
  align-items: center;
`

export const StudyWrapper = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    color: #00fea1;
    font-weight: bold;
  }

  @media (min-width: ${({ theme }) => theme.sizes.tabletPortraitUp}) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.desktopUp}) {
    h1 {
      font-size: 4.5rem;
    }
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
`

export const Link = styled.a`
  color: #ffac00;
`
