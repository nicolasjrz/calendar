/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { Weekdays } from "./components/calendar/Weekdays";
import { FillDays } from "./components/calendar/FillDays";
import { HeaderCalendario } from "./components/calendar/HeaderCalendar";
import { DaysOfTheMonth2 } from "./components/calendar/DaysOfTheMonth2";
import { useCalendar } from "../hooks/useCalendar";

export const Calendar = ({ currentDate = new Date(), onChange }) => {
  const { dayInit, dayRestant, allDays, prevMonth, nextMonth } = useCalendar(
    currentDate,
    onChange
  );

  return (
    <>
      <Grid>
        <Grid container columns={7} mt={2}></Grid>
      </Grid>
    </>
  );
};
