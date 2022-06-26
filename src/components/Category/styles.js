import styled from 'styled-components'
import { Link } from 'wouter'

export const CategoryContainer = styled.section`
  margin: 2rem 0;
`

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
`

export const CategoryItem = styled.li`
  border-radius: 2rem;
  background-color: #7f5af0;
  padding: 1rem;
`

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #fffffe;
  font-size: 1.6rem;
  text-transform: capitalize;
`