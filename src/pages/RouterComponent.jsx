import Paper from "@mui/material/Paper";
import GeneratorContainer from "../components/GeneratorContainer";
import { Menu, AccountCircle } from "@mui/icons-material/";
import ViewContainer from "../components/ViewContainer";

const GeneratorBody = (props) => {
  const { navStatus } = props;
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          height: "60px",
          borderRadius: "0px",
          width: "99%",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Menu
          sx={{ marginLeft: "15px", marginTop: "15px", cursor: "pointer" }}
        />
        <AccountCircle
          sx={{ marginLeft: "90%", marginTop: "15px", cursor: "pointer" }}
        />{" "}
        <Menu sx={{ marginLeft: "0", marginTop: "15px", cursor: "pointer" }} />
      </Paper>
      {navStatus ? <GeneratorContainer /> : (<ViewContainer/>)}
    </div>
  );
};

export default GeneratorBody;
