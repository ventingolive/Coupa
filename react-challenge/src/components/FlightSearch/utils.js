import { SortByEnum } from './filters/SortBy/enums';

export const getFlightNumbers = flights => {
  return flights
    .map(flight => {
      return `${flight.marketingAirlineCode} ${flight.marketingFlightNumber}`;
    })
    .join(', ');
};

export const getFlightDays = (startDateMoment, endDateMoment) => {
  const format = 'ddd M/D';
  return endDateMoment.isSame(startDateMoment, 'day')
    ? endDateMoment.format(format)
    : `${endDateMoment.format(format)} - ${startDateMoment.format(format)}`;
};
//SORT
export const sortBestFlight = (flights, filterBy) => {
  if (filterBy === SortByEnum.TIME_NONE)
    return Array.isArray(flights) ? flights.sort((a, b) => (a.score < b.score) ? -1 : 1) : null
  else
    return filterFlights(filterBy, flights.sort((a, b) => (a.score < b.score) ? -1 : 1))
}
export const sortPriceLowFlight = (flights, filterBy) => {
  if (filterBy === SortByEnum.TIME_NONE)
    return Array.isArray(flights) ? flights.sort((a, b) => (a.price < b.price) ? -1 : 1) : null
  else
    return filterFlights(filterBy, flights.sort((a, b) => (a.price < b.price) ? -1 : 1))
}
export const sortTimeOfDayFlight = (flights, filterBy) => {
  if (filterBy === SortByEnum.TIME_NONE)
    return Array.isArray(flights) ? flights.sort((a, b) => (a.segmentsArray[0].departsAt < b.segmentsArray[0].departsAt) ? -1 : 1) : null
  else
    return filterFlights(filterBy, flights.sort((a, b) => (a.segmentsArray[0].departsAt < b.segmentsArray[0].departsAt) ? -1 : 1))
}
//PAGINATION
export const paginationPossible = (pagination) => {
  if (pagination.isIncrement)
    return ((pagination.currentPage + 1) <= pagination.maxPage)
  else
    return ((pagination.currentPage - 1) >= 0)
}
//FILTER
export const filterFlights = (filterBy, flights) => {
  switch (filterBy) {
    case SortByEnum.TIME_MORNING:
      return flights.filter(flight => (flight.searchId.split('T')[1].split(':')[0] >= 6 && flight.searchId.split('T')[1].split(':')[0] < 12));
    case SortByEnum.TIME_AFTERNOON:
      return flights.filter(flight => (flight.searchId.split('T')[1].split(':')[0] >= 12 && flight.searchId.split('T')[1].split(':')[0] < 18));
    case SortByEnum.TIME_EVENING:
      return flights.filter(flight => (flight.searchId.split('T')[1].split(':')[0] >= 18 && flight.searchId.split('T')[1].split(':')[0] < 24));
    case SortByEnum.TIME_RED_EYE:
      return flights.filter(flight => (flight.searchId.split('T')[1].split(':')[0] >= 0 && flight.searchId.split('T')[1].split(':')[0] < 6));
    default:
      return flights.filter(flight => (flight.searchId.split('T')[1].split(':')[0] >= 6 && flight.searchId.split('T')[1].split(':')[0] < 12));
  }
}