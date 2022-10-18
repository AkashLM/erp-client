import { DeleteForever } from "@mui/icons-material/";
import TotalCalculator from "./TotalCalculator";
import { useCallback } from "react";

const rowGenerator = (

  CurrentProductList,
  setProductQty,
  //deleteRecordFunction,
  ProductQty,
  SubTotal,
  SubTotalT,
  setSubTotal,
  setTotalAmount,
  Visible,setVisible,
) => {

  console.log("Trigger");

  return (
    <>
      {CurrentProductList.map((NPD, key) => {
        let SampleArr1=[...Visible,Visible[key]="visible"];
        setVisible(SampleArr1);
        if (NPD) {
          return (
            <>
              <tr key={key} sx={{visibility:`${Visible[key]}`}}>
                <td>
                  <DeleteForever
                    style={{ cursor: "pointer" }}
                    keyD={key}
                    onClick={(Event) => {
                      // deleteRecordFunction(
                      //   Event.target.attributes.getNamedItem("keyD")?.value,
                      //   CurrentProductList
                      // );
                      let SampleArr2=[...Visible,Visible[key]="hidden"];
                      setVisible(SampleArr2);
                      rowGenerator();
                      console.log(key);
                    }}
                  />
                </td>
                <td>
                  {NPD.ProductName}-({NPD.ProductCode})
                </td>
                <td>
                  <input className="TableInput" type="text" />
                </td>
                <td>
                  <input
                    className="TableInput"
                    type="number"
                    min="0"
                    onChange={(Event) => {
                      let DArray1 = ProductQty;
                      let DArray2 = SubTotal;
                      DArray1[key] = parseInt(Event.target.value);
                      setProductQty(DArray1);
                      const f1 = SubTotalT(key);
                      DArray2[key] = f1;
                      console.log(".......>Sub", f1);
                      setSubTotal(DArray2);
                      console.log(".......>Sub", SubTotal);
                    }}
                  />
                </td>
                <td>
                  <input
                    className="TableInput"
                    type="number"
                    disabled
                    value={NPD.ProductPrice}
                    min="0"
                  />
                </td>
                <td>
                  <input
                    className="TableInput"
                    type="number"
                    disabled
                    value={SubTotal[key]}
                    min="0"
                  />
                </td>
              </tr>
            </>
          );
        }
      })}
      {/* {setTotalAmount(TotalCalculator(SubTotal))} */}
    </>
  );
};

export default rowGenerator;
