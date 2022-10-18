import { Box, Typography } from "@mui/material";
import { SwitchLeft,ViewCozy,ViewTimeline } from "@mui/icons-material/";

const NavigatorBar = (props) => {

    const {setNavStatus}= props;
  return (
    <div>
      <Box
        sx={{
          height: "60px",
          width: "100%",
          //   backgroundColor: "blue",
          marginTop: "5px",
          borderBottom: "1px solid grey",
        }}
      >
        <Typography
          id="modal-modal-title"
          component="h2"
          sx={{
            textAlign: "center",
            color: "blue",
            fontSize: "32px",
            fontWeight: "bold",
            backgroundColor: "whitesmoke",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          ERP
        </Typography>
      </Box>
      <Box
        sx={{
          height: "60px",
          width: "100%",
        //   backgroundColor: "blue",
          marginTop: "15px",
        }}
      >
        <Typography sx={{ marginLeft: "15px", fontSize:"12px", fontWeight:"bold", color:"#425F57"}}>DASHBOARD</Typography>
        <Typography sx={{ marginLeft: "25px", marginTop:"10px",fontSize:"14px", fontWeight:"bold", color:"white", cursor:"pointer"}} onClick={()=>{
            setNavStatus(true);
        }}><ViewCozy sx={{marginRight:"10px"}}/> Dashboard</Typography>
      </Box>
      <Box
        sx={{
          height: "60px",
          width: "100%",
        //   backgroundColor: "blue",
          marginTop: "15px",
        }}
      >
        <Typography sx={{ marginLeft: "15px", fontSize:"12px", fontWeight:"bold", color:"#425F57"}}>APPLICATIONS</Typography>
        <Typography sx={{ marginLeft: "25px", marginTop:"10px",fontSize:"14px", fontWeight:"bold", color:"white", cursor:"pointer"}} onClick={()=>{
            setNavStatus(true);
        }}><ViewCozy sx={{marginRight:"10px"}}/> Sales & Creation</Typography>
        <Typography sx={{ marginLeft: "25px", marginTop:"10px",fontSize:"14px", fontWeight:"bold", color:"white", cursor:"pointer"}} onClick={()=>{
            setNavStatus(false);
        }}><ViewTimeline sx={{marginRight:"10px"}}/> View Inventories</Typography>

      </Box>
    </div>
  );
};

export default NavigatorBar;
