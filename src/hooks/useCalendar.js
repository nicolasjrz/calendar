import {
  add,
  endOfMonth,
  startOfMonth,
  sub,
  eachDayOfInterval,
} from "date-fns";

export const useCalendar = (currentDate, onChange) => {
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const dayInit = startDate.getDay();
  const dayRestant = 6 - endDate.getDay();
  const allDays = eachDayOfInterval({ start: startDate, end: endDate });

  const prevMonth = () => onChange(sub(currentDate, { months: 1 }));
  const nextMonth = () => onChange(add(currentDate, { months: 1 }));

  return { dayInit, dayRestant, allDays, prevMonth, nextMonth };
};
