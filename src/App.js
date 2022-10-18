import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import RouterComponent from "./pages/RouterComponent";
import NavigatorBar from "../src/components/NavigatorBar";
import { useState, useContext } from "react";
import {NotificationContext} from "./utlis/NotificationContext/NotificationContext"

function App() {
  const [navStatus, setNavStatus] = useState(true);
  return (
    <NotificationContext>
    <div className="App">
      <Box
        sx={{
          width: "100 vw",
          height: 720,
          display: "flex",
          backgroundColor: "white",
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            height: "100%",
            width: "20%",
            backgroundColor: "black",
            borderRadius: "0px",
          }}
        >
          <NavigatorBar setNavStatus={setNavStatus} />
        </Paper>
        <Paper
          elevation={0}
          sx={{
            height: "100%",
            width: "80%",
            backgroundColor: "#FFE7CC",
            borderRadius: "0px",
          }}
        >
          <RouterComponent navStatus={navStatus}/>
        </Paper>
      </Box>
    </div>
    </NotificationContext>
  );
}

export default App;
