import { Container } from '../../components/Container'
import { PageCard } from './components/PageCard'
import * as S from './styles'

export const Study = () => {
  return (
    <S.StudyContainer>
      <Container>
        <S.Content>
          <S.Menu>
            <h1>Categories</h1>
            <p>
              Javascript <span>(3)</span>
            </p>
            <p>
              React <span>(3)</span>
            </p>
            <p>
              React Native <span>(3)</span>
            </p>
          </S.Menu>
          <S.CardWrapper>
            <PageCard type='javascript' />
            <PageCard type='javascript' />
            <PageCard type='javascript' />
            <PageCard type='react' />
            <PageCard type='react' />
            <PageCard type='react' />
            <PageCard type='react-native' />
            <PageCard type='react-native' />
            <PageCard type='react-native' />
          </S.CardWrapper>
        </S.Content>
      </Container>
    </S.StudyContainer>
  )
}
