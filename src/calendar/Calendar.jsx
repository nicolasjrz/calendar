/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useCalendar } from "../hooks/useCalendar";
import {
  FillDays,
  HeaderCalendar,
  MonthDays,
  WeekdaysBar,
} from "../components";
import { useState } from "react";

export const Calendar = ({ currentDate, onChange }) => {
  const [cantMonth] = useState(1);

  const { dayInit, dayRestant, allDays, prevMonth, nextMonth } = useCalendar(
    currentDate,
    onChange,
    cantMonth
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
