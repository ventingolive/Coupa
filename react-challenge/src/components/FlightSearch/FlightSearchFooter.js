import React from 'react';
import Button from '../Button';
import { paginationPossible } from './utils'

export default function FlightSearchPagination({ currentValue, maxValue, onChange }) {
  function incrementPage() {
    if (paginationPossible({ isIncrement: true, currentPage: currentValue, maxPage: maxValue }))
      onChange(currentValue + 1)
  }
  function decrementPage() {
    if (paginationPossible({ isIncrement: false, currentPage: currentValue, maxPage: maxValue }))
      onChange(currentValue - 1)
  }
  return (
    <div className="m-t-2 m-b-2 d-space-between full-width footer-align">
      <Button size="sm" onClick={decrementPage}>Previous Page</Button>
      <p className="m-t-0 m-b-0">Page {currentValue + 1} of {maxValue}</p>
      <Button size="sm" onClick={incrementPage}>Next Page</Button>
    </div>
  );
}
