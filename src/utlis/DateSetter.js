// import * as React from 'react';
// import { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useState } from "react";

const BasicDatePicker =()=>{
//   const [value, setValue] = React.useState<Dayjs | null>(null);

//   return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DatePicker
    //     label="Basic example"
    //     value={value}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </LocalizationProvider>

const DateDay=new Date().getDate();
const DateMonth=new Date().getMonth();
const DateYear=new Date().getFullYear()

const [InvoiceDate, setInvoiceDate]= useState(`${DateDay}/${DateMonth}/${DateYear}`);
//   );

  return InvoiceDate;
}

export default BasicDatePicker;