import {
  format,
  isBefore,
  isSameDay,
  isWeekend,
  setDate,
  setMonth,
  setYear,
} from "date-fns";

export const useDay = ({ day, month, year, disabledDates = [] }) => {
  const date = setDate(setMonth(setYear(new Date(), year), month - 1), day);
  const dateFormat = format(date, "dd/MM/yyyy");

  const isTodayDate = isSameDay(date, new Date());
  const isWeekendDate = isWeekend(date);
  const isPastDay = isBefore(date, new Date());
  const isDisabledDate = disabledDates.some((disabledDate) =>
    isSameDay(date, disabledDate)
  );
  const buttonDisabled = isWeekendDate || isPastDay || isDisabledDate;

  return {
    dateFormat,
    isTodayDate,
    isWeekendDate,
    isPastDay,
    buttonDisabled,
    isDisabledDate, // Agregamos esta propiedad para identificar si el día está en la lista de disabledDates
  };
};
