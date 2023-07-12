import { Box } from "@mui/material";

import { useState } from "react";
import { Calendar } from "./calendar/Calendar";

export const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <Calendar currentDate={currentDate} onChange={setCurrentDate} />
    </Box>
  );
};
