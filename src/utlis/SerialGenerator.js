import axios from "axios";
import { useState } from "react";

  const SerialGenerator=()=>{

    const [newFormattedStringState,setNewFormattedStringState]=useState("");
    const UtilFunction =async()=>{
        const PreviousNumber= await axios.get("http://localhost:9000/api/v1/InventorySerialNumber");
        const newString= PreviousNumber?.data?.Data.split("-");
        const oldNumber=(parseInt(newString[1]));
        const newNumber=oldNumber+1;
        const newFormattedString=` INVC-${newNumber}`;
        setNewFormattedStringState(newFormattedString);
    }
    UtilFunction();
    return newFormattedStringState;
  }

  export default SerialGenerator;