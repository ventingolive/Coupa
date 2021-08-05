export const SortByEnum = {
  BEST: 'BEST',
  PRICE_LOW: 'PRICE_LOW',
  TIME_OF_DAY: 'TIME_OF_DAY',
  TIME_NONE: 'TIME_NONE',
  TIME_MORNING: 'TIME_MORNING',
  TIME_AFTERNOON: 'TIME_AFTERNOON',
  TIME_EVENING: 'TIME_EVENING',
  TIME_RED_EYE: 'TIME_RED_EYE'
};

// <Select /> component options need to have
// a "value" field and a "label" property to render properly
export const SortByOptions = [
  {
    value: SortByEnum.BEST,
    label: 'Best',
  },
  {
    value: SortByEnum.PRICE_LOW,
    label: 'Price (low)',
  },
  {
    value: SortByEnum.TIME_OF_DAY,
    label: 'Time of Day',
  },
];
export const SortByTimeOptions = [
  {
    value: SortByEnum.TIME_NONE,
    label: '',
  },
  {
    value: SortByEnum.TIME_MORNING,
    label: 'Morning',
  },
  {
    value: SortByEnum.TIME_AFTERNOON,
    label: 'Afternoon',
  },
  {
    value: SortByEnum.TIME_EVENING,
    label: 'Evening',
  },
  {
    value: SortByEnum.TIME_RED_EYE,
    label: 'Red-eye',
  },
];

export const SortByDefaultOption = SortByOptions[0];
export const SortByTimeDefaultOption = SortByTimeOptions[0];
