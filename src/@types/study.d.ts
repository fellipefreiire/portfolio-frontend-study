type Tag = 'react' | 'javascript' | 'react-native' | 'flutter' | 'dart'

interface ICardProps {
  tags: Tag[]
  title: string
  description: string
  teacher: string
  company: string
}
