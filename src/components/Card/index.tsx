import * as S from './styles'

export const Card = ({
  tags,
  title,
  description,
  teacher,
  company,
}: ICardProps) => {
  return (
    <S.CardContainer>
      <S.TagsWrapper>
        {tags.map((tag) => (
          <S.Tag variant={tag} key={tag}>
            <span>{tag}</span>
          </S.Tag>
        ))}
      </S.TagsWrapper>
      <S.Content>
        <h2>{title}</h2>
        <span>{description}</span>
      </S.Content>
      <S.Footer>
        <span>{teacher}</span>
        <img src={require(`../../assets/logo-${company}.svg`)} alt='' />
      </S.Footer>
    </S.CardContainer>
  )
}
