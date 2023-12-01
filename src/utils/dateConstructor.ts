const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const buildStringFromDate = (date: Date): string => {
  const dayOfWeek = date.getUTCDay();
  const month = date.getUTCMonth();
  const dayOfMonth = date.getUTCDate();
  return `${days[dayOfWeek]}, ${months[month]} ${dayOfMonth}`;
};

export const buildDateFromString = (date: string): Date => {
  const day = date.split(' ')[2];
  const month = months.indexOf(date.split(' ')[1]) + 1;
  const year = '2023';
  const newdate = new Date(`${year}-${month}-${day}`);
  return newdate;
};
