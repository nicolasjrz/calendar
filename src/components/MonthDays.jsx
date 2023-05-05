/* eslint-disable react/prop-types */

import { getDate, getMonth, getYear } from "date-fns";

const disabledDates = [
  new Date(2023, 5, 12),
  new Date(2023, 5, 15),
  new Date(2023, 5, 20),
];

export const MonthDays = ({ allDays = [] }) => {
  return (
    <>
      {allDays.map((fecha, index) => {
        const dayNumber = getDate(fecha);
        const month = getMonth(fecha) + 1;
        const year = getYear(fecha);

        return <></>;
      })}
    </>
  );
};
