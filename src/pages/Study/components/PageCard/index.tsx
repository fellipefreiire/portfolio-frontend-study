import * as S from './styles'

interface Props {
  type: Tag
}

export const PageCard = ({ type }: Props) => {
  return (
    <S.PageCardContainer variant={type}>
      <S.Type variant={type}>JAVASCRIPT</S.Type>
      <S.Title>Title: Something about javascript</S.Title>
      <S.SubTitle>
        Subtitle: More about javascript and some specs about the article more
        about javascript{' '}
      </S.SubTitle>
      <S.Image src={require(`../../../../assets/${type}.png`)} alt='' />
    </S.PageCardContainer>
  )
}
