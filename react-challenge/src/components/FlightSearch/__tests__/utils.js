import { getFlightNumbers, sortBestFlight, sortPriceLowFlight, sortTimeOfDayFlight, paginationPossible } from '../utils';

test('returns result if array', () => {
  const flights = [
    {
      marketingAirlineCode: 'NK',
      marketingFlightNumber: 123,
      airline: 'Spirit',
    },
  ];
  expect(getFlightNumbers(flights)).toEqual('NK 123');
})
describe('Flight Search Utility Functions', () => {
  describe('Flight Numbers', () => {
    it('should a single concatenated airline code and flight number', () => {
      const flights = [
        {
          marketingAirlineCode: 'NK',
          marketingFlightNumber: 123,
          airline: 'Spirit',
        },
      ];
      expect(getFlightNumbers(flights)).toEqual('NK 123');
    });

    it('should return a string of multiple concatenations if there are multiple flights', () => {
      const flights = [
        {
          marketingAirlineCode: 'NK',
          marketingFlightNumber: 123,
          airline: 'Spirit',
        },
        {
          marketingAirlineCode: 'F9',
          marketingFlightNumber: 456,
          airline: 'Frontier',
        },
      ];
      expect(getFlightNumbers(flights)).toEqual('NK 123, F9 456');
    });
  });
  describe('Flight Sort', () => {
    it('should sort flight data by low score', () => {
      const flights = [
        {
          score: 3479
        },
        {
          score: 3469
        },
        {
          score: 3459
        }
      ];
      expect(sortBestFlight(flights, 'TIME_NONE')).toEqual([{ "score": 3459 }, { "score": 3469 }, { "score": 3479 }]);
    });
    it('should sort flight data by low price', () => {
      const flights = [
        {
          price: 205.38
        },
        {
          price: 195.38
        },
        {
          price: 185.38
        }
      ];
      expect(sortPriceLowFlight(flights, 'TIME_NONE')).toEqual([{ "price": 185.38 }, { "price": 195.38 }, { "price": 205.38 }]);
    });
    it('should sort flight data by time of day', () => {
      const flights = [
        {
          searchId: "UA3222018-10-08T00:47:00:UA4632018-10-08T08:00:00"
        },
        {
          searchId: "WN19822018-10-08T17:05:00:WN22302018-10-08T21:15:00"
        },
        {
          searchId: "UA5332018-10-08T11:25:00"
        }
      ];
      expect(sortTimeOfDayFlight(flights, 'TIME_NONE')).toEqual([
        {
          searchId: "UA3222018-10-08T00:47:00:UA4632018-10-08T08:00:00"
        },
        {
          searchId: "UA5332018-10-08T11:25:00"
        },
        {
          searchId: "WN19822018-10-08T17:05:00:WN22302018-10-08T21:15:00"
        }
      ]);
    });
  });
  describe('Pagination', () => {
    it('should determine if decrement pagination is possible', () => {
      const paginationInfo = { isIncrement: false, currentPage: 0, maxPage: 10 }
      expect(paginationPossible(paginationInfo)).toEqual(false);
    });
    it('should determine if increment pagination is possible', () => {
      const paginationInfo = { isIncrement: true, currentPage: 10, maxPage: 10 }
      expect(paginationPossible(paginationInfo)).toEqual(false);
    });
  });
});


