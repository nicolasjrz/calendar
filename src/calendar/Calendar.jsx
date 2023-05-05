/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useCalendar } from "../hooks/useCalendar";
import {
  FillDays,
  HeaderCalendar,
  MonthDays,
  WeekdaysBar,
} from "../components";

export const Calendar = ({ currentDate = new Date(), onChange }) => {
  const { dayInit, dayRestant, allDays, prevMonth, nextMonth } = useCalendar(
    currentDate,
    onChange
  );

  return (
    <>
      <Grid>
        <Grid container columns={7} mt={2}>
          <HeaderCalendar
            currentDate={currentDate}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
          />
          <WeekdaysBar />

          <FillDays amount={dayInit} />
          <MonthDays allDays={allDays} />
          <FillDays amount={dayRestant} />
        </Grid>
      </Grid>
    </>
  );
};
