import * as S from './styles'
import logoUdemy from '../../assets/logo-udemy.svg'

export const Card = () => {
  return (
    <S.CardContainer>
      <S.TagsWrapper>
        <S.Tag>
          <span>Flutter</span>
        </S.Tag>
        <S.Tag>
          <span>Dart</span>
        </S.Tag>
      </S.TagsWrapper>
      <S.Content>
        <h2>Flutter & Dart - The Complete Guide [2022 Edition]</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime
          mollitia, molestiae quas vel sint commodi repudia...
        </span>
      </S.Content>
      <S.Footer>
        <span>Maximilian Schwarzmüller</span>
        <img src={logoUdemy} alt='' />
      </S.Footer>
    </S.CardContainer>
  )
}
