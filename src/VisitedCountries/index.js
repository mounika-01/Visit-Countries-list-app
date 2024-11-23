
import {
  VisitedCountryContainer,
  Flag,
  NameContainer,
  CardCountryName,
  RemoveBtn,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountryDetails, onRemoveCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onRemoveBtnClicked = () => {
    onRemoveCountry(id)
  }

  return (
    <VisitedCountryContainer>
      <Flag src={imageUrl} alt="thumbnail"></Flag>
      <NameContainer>
        <CardCountryName>{name}</CardCountryName>
        <RemoveBtn onClick={onRemoveBtnClicked}>Remove</RemoveBtn>
      </NameContainer>
    </VisitedCountryContainer>
  )
}

export default VisitedCountries
