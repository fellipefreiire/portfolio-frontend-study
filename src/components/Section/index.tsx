import { Card } from '../Card'
import * as S from './styles'

export const Section = () => {
  return (
    <S.SectionContainer>
      <S.StudyWrapper>
        <h1>What am I studying?</h1>
      </S.StudyWrapper>
      <S.CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardWrapper>
      <S.Link>See all courses</S.Link>
    </S.SectionContainer>
  )
}
