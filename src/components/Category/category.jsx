import {
  CategoryContainer,
  CategoryList,
  CategoryItem,
  CategoryLink
} from './styles'

function Category({ options  = []}) {
  return (
    <CategoryContainer>
      <CategoryList>
        {options.map((option) => (
          <CategoryItem key={option}>
            <CategoryLink to={`/search/${option}`}>
              {option}
            </CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  )
}

export default Category
