import { Paper, Typography, Box } from "@mui/material";
import "./ViewContainer.css";

const ViewContainer = () => {
  return (
    <div className="View-Main-Container">
      <Paper className="Paper-Container">
        <div className="Paper-Container_wrapper" style={{display:"flex"}}>
        <Box className="Box-Div">
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Invoice Number:</span> INVC0214
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Invoice Date:</span> 22/10/2000
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Customer Name:</span> Jenith
            Bell
          </Typography>{" "}
          <Typography className="Title-Typo"></Typography>
        </Box>

        <Box className="Box-Div">
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Delivery Type:</span> Courier
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>
              Status: <span style={{ color: "blue" }}>Success </span>
            </span>
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Payment Status:</span> Positive
          </Typography>{" "}
          <Typography className="Title-Typo"></Typography>
        </Box>

        <Box className="Box-Div">
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Payment Method:</span> Cash
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>
              Amount: <span style={{ color: "green" }}>1250 /- </span>
            </span>
          </Typography>
          <Typography className="Title-Typo">
            <span style={{ fontWeight: "bold" }}>Payment Details:</span> In hand
            cash by the delivery.
          </Typography>{" "}
          <Typography className="Title-Typo"></Typography>
        </Box>
       </div>
       <Box className="Product-Evaluation">
          <table>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>KMG1254</td>
              <td>Kesar Mango</td> 
              <td>12</td> 
              <td>1254 /-</td>
            </tr>
            <tr>
              <td colSpan={3}><span style={{fontWeight:"bold", color:"green"}}>Grand Total :</span></td>
              <td><span style={{fontWeight:"bold", color:"green"}}>1250 /-</span></td> 
            </tr>
          </table>
        </Box>
      </Paper>

    </div>
  );
};
export default ViewContainer;
