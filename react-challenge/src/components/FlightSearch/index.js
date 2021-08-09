import React, { useState, useCallback } from 'react';
import './index.style.css';
import FlightSearchItem from './FlightSearchItem';
import FlightSearchFooter from './FlightSearchFooter';
import useFetchFlightResults from './useFetchFlightResults';
import SortBy from './filters/SortBy';
import { SortByDefaultOption, SortByEnum, SortByTimeDefaultOption } from './filters/SortBy/enums';
import { sortBestFlight, sortPriceLowFlight, sortTimeOfDayFlight, GetFlightPageSpace } from './utils';

export default function FlightSearch() {
  const [sortBy, setSortBy] = useState(SortByDefaultOption);
  const [timeSortBy, setTimeSortBy] = useState(SortByTimeDefaultOption)
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch Flights
  const { flights } = useFetchFlightResults();//this will only be called once in the lifecycle  
  const memoSort = useCallback(() => SortFlights(flights, sortBy, timeSortBy), [flights, sortBy, timeSortBy])

  if (Array.isArray(flights)) {
    //get the number of tiles available on page
    var availablePageSpace = GetFlightPageSpace()
    //paginate sortedFlights
    var paginatedFlights = PaginateFlights(memoSort({ ...flights }, sortBy, timeSortBy))
  }

  //utility functions
  function SortFlights(fullFlight, mySort, myTime) {
    if (Array.isArray(fullFlight)) {
      switch (mySort.value) {
        case SortByEnum.BEST:
          return sortBestFlight(flights, myTime.value)
        case SortByEnum.PRICE_LOW:
          return sortPriceLowFlight(flights, myTime.value)
        case SortByEnum.TIME_OF_DAY:
          return sortTimeOfDayFlight(flights, myTime.value)
        default:
          return sortBestFlight(flights, myTime.value)
      };
    }
    else
      return null
  }

  function PaginateFlights(theFlights) {
    return theFlights.map((e, i) => {
      return i % availablePageSpace === 0 ? theFlights.slice(i, i + availablePageSpace) : null;
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
          {Array.isArray(paginatedFlights) && paginatedFlights.length > 0 &&
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
