import{Modal, Typography, Button,Box,} from "@mui/material";
import { useContext } from "react";
import {NotificationProvider} from "../NotificationContext/NotificationContext";

const NotificationBar =()=>{

    
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: "1px 2px 2px grey",
    boxShadow: 24,
    borderRadius: "5px",
    padding: "20px",
  };
  
    const{
        message,
    colorP,
    btnMessage,
    open,
    handleClose,
    }= useContext(NotificationProvider);


    return(<>
       <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center", color: `${colorP}` }}
              >
                {message}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "35%" }}
                  onClick={handleClose}
                >
                  {btnMessage}
                </Button>
              </Typography>
            </Box>
          </Modal>
    </>)
}
export default NotificationBar;