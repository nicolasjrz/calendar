/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
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
