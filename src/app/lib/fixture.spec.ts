export const baseFrequency = [
  {value: 0, label: 'Please select'},
  {value: 1, label: 'Minute'},
  {value: 2, label: 'Hour'},
  {value: 3, label: 'Day'},
  {value: 4, label: 'Week'},
  {value: 5, label: 'Month'},
  {value: 6, label: 'Year'}
];

export const numeral = [
  {value: 1, label: '1st'},
  {value: 2, label: '2nd'},
  {value: 3, label: '3rd'},
  {value: 4, label: '4th'},
  {value: 5, label: '5th'},
  {value: 6, label: '6th'},
  {value: 7, label: '7th'},
  {value: 8, label: '8th'},
  {value: 9, label: '9th'},
  {value: 10, label: '10th'},
  {value: 11, label: '11th'},
  {value: 12, label: '12th'},
  {value: 13, label: '13th'},
  {value: 14, label: '14th'},
  {value: 15, label: '15th'},
  {value: 16, label: '16th'},
  {value: 17, label: '17th'},
  {value: 18, label: '18th'},
  {value: 19, label: '19th'},
  {value: 20, label: '20th'},
  {value: 21, label: '21st'},
  {value: 22, label: '22nd'},
  {value: 23, label: '23rd'},
  {value: 24, label: '24th'},
  {value: 25, label: '25th'},
  {value: 26, label: '26th'},
  {value: 27, label: '27th'},
  {value: 28, label: '28th'},
  {value: 29, label: '29th'},
  {value: 30, label: '30th'},
  {value: 31, label: '31st'}
];

export const months = [
  {value: 1, label: 'January'},
  {value: 2, label: 'February'},
  {value: 3, label: 'March'},
  {value: 4, label: 'April'},
  {value: 5, label: 'May'},
  {value: 6, label: 'June'},
  {value: 7, label: 'July'},
  {value: 8, label: 'August'},
  {value: 9, label: 'September'},
  {value: 10, label: 'October'},
  {value: 11, label: 'November'},
  {value: 12, label: 'December'}
];

export function getHours() {
  const hours = [];
  for (let x = 0; x < 24; x++) {
    hours.push({value: x, label: `${x}`});
  }
  return hours;
}

export function getMinutes(step: number = 5) {
  const minutes = [];
  for (let x = 0; x < 60; x = x + step) {
    minutes.push({value: x, label: `${x}`});
  }
  return minutes;
}

export const defaultConfig = {
  quartz: false,
  bootstrap: true,
  multiple: false,
};

export const defaultValidateConfig = {
  validate: false,
};

export const daysOfWeekPosix = [
  {value: 0, label: 'Sunday'},
  {value: 1, label: 'Monday'},
  {value: 2, label: 'Tuesday'},
  {value: 3, label: 'Wednesday'},
  {value: 4, label: 'Thursday'},
  {value: 5, label: 'Friday'},
  {value: 6, label: 'Saturday'}
];

export const daysOfWeekQuartz = [
  {value: 1, label: 'Sunday'},
  {value: 2, label: 'Monday'},
  {value: 3, label: 'Tuesday'},
  {value: 4, label: 'Wednesday'},
  {value: 5, label: 'Thursday'},
  {value: 6, label: 'Friday'},
  {value: 7, label: 'Saturday'}
];

export const baseFrequencyForService = {
  none: 0,
  minute: 1,
  hour: 2,
  day: 3,
  week: 4,
  month: 5,
  year: 6
};
