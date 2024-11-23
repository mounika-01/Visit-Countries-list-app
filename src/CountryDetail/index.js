import {
  CountryDetailContainer,
  CountryName,
  VisitBtn,
  VisitedText,
} from './styledComponents'

const CountryDetail = props => {
  const {countryDetails, onToggleVisit} = props
  const {name, id, isVisited} = countryDetails

  const onChangeStatus = () => {
    onToggleVisit(id)
  }

  return (
    <CountryDetailContainer>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitBtn onClick={onChangeStatus}>Visit</VisitBtn>
      )}
    </CountryDetailContainer>
  )
}

export default CountryDetail