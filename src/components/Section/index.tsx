import { Card } from '../Card'
import { Container } from '../Container'
import * as S from './styles'

const fakeData = [
  {
    id: '1',
    tags: ['flutter', 'dart'],
    title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Maximilian Schwarzmüller Schwarzmüller',
    company: 'udemy',
  },
  {
    id: '2',
    tags: ['react', 'javascript'],
    title: 'Ignite React Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Maximilian Schwarzmüller',
    company: 'rocketseat',
  },
  {
    id: '3',
    tags: ['react native', 'javascript'],
    title: 'Ignite React Native Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Rodrigo Gonçalves',
    company: 'rocketseat',
  },
  {
    id: '4',
    tags: ['flutter', 'dart'],
    title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Maximilian Schwarzmüller',
    company: 'udemy',
  },
  {
    id: '5',
    tags: ['react', 'javascript'],
    title: 'Ignite React Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Diego Fernandes',
    company: 'rocketseat',
  },
  {
    id: '6',
    tags: ['react native', 'javascript'],
    title: 'Ignite React Native Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Rodrigo Gonçalves',
    company: 'rocketseat',
  },
  {
    id: '7',
    tags: ['flutter', 'dart'],
    title: 'Flutter & Dart - The Complete Guide [2022 Edition]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Maximilian Schwarzmüller',
    company: 'udemy',
  },
  {
    id: '8',
    tags: ['react', 'javascript'],
    title: 'Ignite React Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Diego Fernandes',
    company: 'rocketseat',
  },
  {
    id: '9',
    tags: ['react native', 'javascript'],
    title: 'Ignite React Native Path',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicin g elit. Maxime mollitia, molestiae quas vel sint commodi repudia',
    teacher: 'Rodrigo Gonçalves',
    company: 'rocketseat',
  },
]

export const Section = () => {
  return (
    <S.SectionContainer>
      <Container>
        <S.Content>
          <S.StudyWrapper>
            <h1>What am I studying?</h1>
          </S.StudyWrapper>
          <S.CardWrapper>
            {fakeData.map((item) => (
              <Card
                key={item.id}
                tags={item.tags}
                title={item.title}
                description={item.description}
                teacher={item.teacher}
                company={item.company}
              />
            ))}
          </S.CardWrapper>
          <S.Link>See all courses</S.Link>
        </S.Content>
      </Container>
    </S.SectionContainer>
  )
}
