import { useState, createContext } from "react";

export const NotificationProvider = createContext();
export const NotificationContext = (Props) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [btnMessage, setBtnMessage] = useState("");

  //Custom for Material Design

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <NotificationProvider.Provider
      value={{
        message,
        setMessage,
        color,
        setColor,
        btnMessage,
        setBtnMessage,
        open,
        setOpen,
        handleOpen,
        handleClose,
      }}
    >
      {Props.children}
    </NotificationProvider.Provider>
  );
};

//NotificationProvider --> For file import.
//NotificationBox --> For global wrapper app.js
