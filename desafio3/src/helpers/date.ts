export const months: string[] = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export const years: string[] = ['2020','2021', '2022', '2023']

export const  getTodayYearMonth = () => {
  const jsDate: Date = new Date()
  const month = jsDate.getMonth()
  const year = jsDate.getFullYear()
  return `${year}-${(month + 1).toString().padStart(2, '0')}`
}