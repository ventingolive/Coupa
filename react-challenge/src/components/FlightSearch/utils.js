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
export const sortBestFlight = (flights) => {
  return Array.isArray(flights) ? flights.sort((a, b) => (a.score < b.score) ? -1 : 1) : null
}
export const sortPriceLowFlight = (flights) => {
  return Array.isArray(flights) ? flights.sort((a, b) => (a.price < b.price) ? -1 : 1) : null
}
export const sortTimeOfDayFlight = (flights) => {
  return Array.isArray(flights) ? flights.sort((a, b) => (a.segmentsArray[0].departsAt < b.segmentsArray[0].departsAt) ? -1 : 1) : null
}
//PAGINATION
export const paginationPossible = (pagination) => {
  if(pagination.isIncrement)
    return ((pagination.currentPage + 1) <= pagination.maxPage)
  else
    return ((pagination.currentPage - 1) >= 0)
}
//FILTER
export const filterMorning = (flights) => {
  return flights.filter(flight => flight.segmentsArray[0].departsAt >= '2018-10-08T12:00:00.000Z' && flight.segmentsArray[0].departsAt <= '2018-10-08T6:00:00.000Z');
}
export const filterAfternoon = (flights) => {
  return flights.filter(flight => flight.segmentsArray[0].departsAt > '2018-10-08T12:00:00.000Z');
}
export const filterEvening = (flights) => {
  return flights.filter(flight => flight.segmentsArray[0].departsAt > '2018-10-08T12:00:00.000Z');
}
export const filterRedEye = (flights) => {
  return flights.filter(flight => flight.segmentsArray[0].departsAt > '2018-10-08T12:00:00.000Z');
}