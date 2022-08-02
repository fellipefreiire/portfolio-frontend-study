import styled from 'styled-components'

export const CardContainer = styled.div`
  background: #242424;
  padding: 16px;
  border-radius: 10px;
  max-width: 379px;
`

export const TagsWrapper = styled.header`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  background: #f9f871;
  border-radius: 1000px;

  span {
    font-size: 12px;
    color: black;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 12px;
  margin-bottom: 24px;

  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 24px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  span {
    font-size: 18px;
  }

  img {
    height: 22px;
  }
`
