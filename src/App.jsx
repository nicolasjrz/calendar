import { Box, Button } from "@mui/material";

import { Calendar } from "./calendar/Calendar";
import { useDateStore } from "./hooks/useDateStore";

export const App = () => {
  // const [currentDate, setCurrentDate] = useState(new Date());

  const { daySelected, onChangeDate, currentDate, startChangeCurrrenteDate } =
    useDateStore();

  const onbutton = () => {
    startChangeCurrrenteDate(daySelected);
  };

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <Calendar currentDate={currentDate} onChange={onChangeDate} />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button variant="contained" onClick={onbutton}>
          Contained
        </Button>
      </Box>
    </>
  );
};
