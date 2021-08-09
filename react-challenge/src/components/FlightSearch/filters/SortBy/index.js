import React from 'react';
import Select from 'react-select';
import FlightSearchFilter from '../FlightSearchFilter';
import { SortByOptions, SortByTimeOptions } from './enums';

export default function FlightSearchSortBy({ value, onChange, timeValue, onTimeChange }) {
  return (
    <FlightSearchFilter>
      <section className="sort-by-section">
        <label htmlFor="sortBy">Sort By</label>
        <Select
          name="sortBy"
          value={value}
          onChange={onChange}
          options={SortByOptions}
          styles={{ input: () => ({ width: 150 }) }}
        />
      </section>
      <section className="sort-by-section">
        <label htmlFor="sortByTime">Sort By Time</label>
        <Select
          name="sortByTime"
          value={timeValue}
          onChange={onTimeChange}
          options={SortByTimeOptions}
          styles={{ input: () => ({ width: 150 }) }}
        />
      </section>
    </FlightSearchFilter>
  );
}
