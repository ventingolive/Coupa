import React, { useState } from 'react';
import './index.style.css';
import FlightSearchItem from './FlightSearchItem';
import FlightSearchFooter from './FlightSearchFooter';
import useFetchFlightResults from './useFetchFlightResults';
import SortBy from './filters/SortBy';
import { SortByDefaultOption, SortByEnum, SortByTimeDefaultOption } from './filters/SortBy/enums';
import { sortBestFlight, sortPriceLowFlight, sortTimeOfDayFlight, filterMorning, filterAfternoon, filterEvening, filterRedEye } from './utils';

export default function FlightSearch() {
  const [sortBy, setSortBy] = useState(SortByDefaultOption);
  const [timeSortBy, setTimeSortBy] = useState(SortByTimeDefaultOption)
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch Flights
  const { flights } = useFetchFlightResults();//this will only be called once in the lifecycle
  let sortedFlights = [];
  let availablePageSpace = Math.floor((window.innerHeight - (100 + 54 + 79)) / 64) - 1;
  switch (sortBy.value) {
    case SortByEnum.BEST:
      sortedFlights = Array.isArray(flights) ? sortBestFlight(flights) : null
      break;
    case SortByEnum.PRICE_LOW:
      sortedFlights = Array.isArray(flights) ? sortPriceLowFlight(flights) : null
      break;
    case SortByEnum.TIME_OF_DAY:
      sortedFlights = Array.isArray(flights) ? sortTimeOfDayFlight(flights) : null
      break;
    default:
      sortedFlights = Array.isArray(flights) ? sortBestFlight(flights) : null
      break;
  }
  switch (timeSortBy.value) {
    case SortByEnum.TIME_MORNING:
      sortedFlights = sortedFlights.length > 0 ? filterMorning(sortedFlights) : null
      break;
    case SortByEnum.TIME_AFTERNOON:
      sortedFlights = sortedFlights.length > 0 ? filterAfternoon(sortedFlights) : null
      break;
    case SortByEnum.TIME_EVENING:
      sortedFlights = sortedFlights.length > 0 ? filterEvening(sortedFlights) : null
      break;
    case SortByEnum.TIME_RED_EYE:
      sortedFlights = sortedFlights.length > 0 ? filterRedEye(sortedFlights) : null
      break;
    default:
      break;
  }

  if (Array.isArray(sortedFlights)) {
    var paginatedFlights = sortedFlights.map((e, i) => {
      return i % availablePageSpace === 0 ? sortedFlights.slice(i, i + availablePageSpace) : null;
    }).filter(e => { return e; });
  }
  function UpdateSortType(newSort) {
    setSortBy(newSort)
    setCurrentPage(0)
  }
  function UpdateTimeSortType(newSort) {
    setTimeSortBy(newSort)
  }
  return (
    <div className="row fill-available-screen">
      <div className="pane m-t-1">
        <div className="pane-header search-results__header">
          <div className="search-results__title">
            <b>Select an outbound flight</b>
            <p className="m-v-0 fade small">DEN → CHI</p>
          </div>
          <SortBy value={sortBy} onChange={UpdateSortType} timeValue={timeSortBy} onTimeChange={UpdateTimeSortType} />
        </div>
        {/* Display Flight Results */}
        <div className="pane-content">
          {Array.isArray(paginatedFlights) &&
            paginatedFlights[currentPage].map(flight => (
              <FlightSearchItem key={flight.id} flight={flight} />
            ))}
        </div>
      </div>
      {/* Pagination */}
      {Array.isArray(paginatedFlights) &&
        <FlightSearchFooter currentValue={currentPage} maxValue={paginatedFlights.length} onChange={setCurrentPage} />}
    </div>
  );
}
