/* eslint-disable react/prop-types */

import { Grid } from "@mui/material";
import { useDate } from "../../hooks/useDate";

export const Day = ({ day, month, year, disabledDates = [] }) => {
  const {
    dateFormat,
    isTodayDate,
    isWeekendDate,
    isPastDay,
    buttonDisabled,
    isDisabledDate,
  } = useDate(day, month, year, disabledDates);

  const handleClickDate = (fecha) => {
    console.log(fecha);
  };

  return (
    <>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        minHeight={50}
        height={50}
        sx={{
          border: "1px solid #080808",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          backgroundColor: isTodayDate
            ? "#7c8cf7"
            : isPastDay
            ? "#e0dcdc"
            : isWeekendDate
            ? "#f5b5bc"
            : isDisabledDate // Si es una fecha deshabilitada, se aplica el color verde
            ? "#b3ffb3"
            : "#b5cef5",
          fontWeight: isTodayDate ? "bold" : "normal",
        }}
        onClick={() => handleClickDate(dateFormat)}
        component={"button"}
        disabled={buttonDisabled}
      >
        {day}
      </Grid>
    </>
  );
};
